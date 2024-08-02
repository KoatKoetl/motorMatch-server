FROM oven/bun

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3001

ENV PORT=3001
ENV URI="mongodb+srv://MotorMatchAdmin:stanislav27%40@motormatch.viqpnrq.mongodb.net/?retryWrites=true&w=majority&appName=MotorMatch"

CMD ["bun", "run", "prod"]