import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { setCookie } from "nookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, username } = req.body;

  const userExists = await prisma.user.findUnique({
    //procurar registro por um campo único
    where: {
      username,
    },
  });

  if (userExists) {
    return res.status(400).json({
      message: "Username already token",
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  });

  // utilizar cookies pra conseguir identificar e manter as informações dos usuários independente dos redirecionamentos ou atualizações na página, já que eles ainda não estão logados na nossa aplicação.

  setCookie({ res }, "@ignitecall:userId", user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return res.status(201).json(user);
}
