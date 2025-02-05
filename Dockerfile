FROM oven/bun:1 AS base
WORKDIR /app

FROM base AS builder

COPY package.json bun.lock tsconfig.json src ./

RUN bun install --frozen-lockfile && bun run build

FROM base AS runner

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=2000
EXPOSE 2000
CMD ["bun", "dist/index.js"]