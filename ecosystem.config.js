module.exports = {
  apps: [
    {
      name: "nuo-koa-mpa",
      script: "app.ts",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true, // 进程崩溃时自动重启
      interpreter: "node",
      interpreter_args: "-r ts-node/register",
      watch: true, // 启用文件监控，文件改变时自动重启
      ignore_watch: ["node_modules", "logs"], // 忽略监控的文件夹，避免不必要的重启
      env: {
        NODE_ENV: "development", // 开发环境
        TS_NODE_PROJECT: "./tsconfig.json", // 指定TypeScript配置文件路径
      },
      env_production: {
        NODE_ENV: "production", // 生产环境配置
        TS_NODE_PROJECT: "./tsconfig.json",
      },
      merge_logs: true, // 合并集群模式下的所有实例日志
      error_file: "./logs/nuo-app-error.log", // 错误日志文件路径
      out_file: "./logs/nuo-app-out.log", // 普通输出日志路径
      log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志时间格式
    },
  ],
};
