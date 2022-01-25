const { createLogger, transports, format } = require("winston");
const { combine, timestamp, label, printf, simple, colorize} = format;

const printfFormat = printf(({ timestamp, label, level, message }) => {
   return `${timestamp} [${label}] ${level} : ${message}`; 
});

const printfLogFormat = {
    file: combine(
    label({
        label: "백엔드 연습",
    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printfFormat
    ),
    console: combine(
        colorize(),
        simple()
    ),
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printfLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printfLogFormat.console,  
    }),
};

const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production"){
    logger.add(opts.console);
}

module.exports = logger;