module.exports = {
  extends: ["doctor-config-essentials", require("./custom")],
  rules: {
    redis: [
      2,
      {
        name: "Redis",
        port: 5432,
        host: "localhost"
      }
    ],
    pb: [
      2,
      {
        name: "Pb",
        port: 80,
        host: "pb.test"
      }
    ]
  }
};