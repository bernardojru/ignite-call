import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const username = String(req.query.username);
  const { year, month } = req.query;

  if (!year || !month) {
    return res.status(400).json({ message: "Year or month." });
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "User does not exist." });
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  });

  const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter((weekDay) => {
    return !availableWeekDays.some(
      (availableWeekDay) => availableWeekDay.week_day === weekDay
    );
  });

  // const blockedDatesRaw: Array<{ date: number }> = await prisma.$queryRaw`
  //   SELECT
  //     EXTRACT(DAY FROM S.DATE) AS date,
  //     COUNT(S.date) AS amount,
  //     ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60) AS size
  //   FROM schedulings S
  //   LEFT JOIN user_time_intervals UTI
  //     ON UTI.week_day = WEEKDAY(DATE_ADD(S.date, INTERVAL 1 DAY))
  //   WHERE S.user_id = ${user.id}
  //     AND DATE_FORMAT(S.date, "%Y-%m") = ${`${year}-${month}`}
  //   GROUP BY EXTRACT(DAY FROM S.DATE),
  //     ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)
  //   HAVING amount >= size
  // `

  // const blockedDates = blockedDatesRaw.map((item) => item.date)

  // return res.json({ blockedWeekDays, blockedDates })

  return res.json({ blockedWeekDays });
}

// Chegamos em um ponto em que não conseguimos mais continuar usando o sqlite e vamos alterar o banco para o MySQL.

// Comando utilizado para rodar o Docker:
// docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

// Comando utilizado para iniciar o container
// docker start mysql

// Comando utilizado para parar o container:
// docker stop mysql