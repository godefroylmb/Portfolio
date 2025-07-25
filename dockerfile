FROM alpine:3.21 AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build


FROM alpine:3.21 AS runner

WORKDIR /app

RUN apk add --no-cache libc6-compat


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8192

CMD ["pnpm", "start"]
