export default {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 9876,
      user: "jondem",
      password: "",
      database: "loife"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
