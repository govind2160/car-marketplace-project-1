/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_KJivwg6FXec9@ep-empty-snowflake-a1rs3za5-pooler.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require&channel_binding=require',
    }
  };

  //my sql
  //postgresql://neondb_owner:npg_KJivwg6FXec9@ep-empty-snowflake-a1rs3za5-pooler.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require&channel_binding=require

  //othre sql
  //postgresql://accounts:mv4Mx0OdHZQA@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/car-marketplace?sslmode=require