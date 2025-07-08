import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { CarListing, CarImages } from '../configs/schema.js';
import 'dotenv/config'; // make sure .env is loaded

const sql = neon('postgresql://neondb_owner:npg_KJivwg6FXec9@ep-empty-snowflake-a1rs3za5-pooler.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require&channel_binding=require');
const db = drizzle(sql);

async function seed() {
  // Insert into CarListing
  const result = await db.insert(CarListing).values({
    listingTitle: "Honda City ZX",
    tagline: "Luxury and Comfort",
    originalPrice: "1500000",
    sellingPrice: "1350000",
    category: "Sedan",
    condition: "Used",
    make: "Honda",
    model: "City",
    year: "2019",
    driveType: "FWD",
    transmission: "Automatic",
    fuelType: "Petrol",
    mileage: "35000",
    engineSize: "1.5L",
    cylinder: "4",
    color: "White",
    door: "4",
    offerType: "Fixed",
    vin: "1234ZX5678",
    listingDescription: "Well maintained car with service history.",
    features: ["Airbags", "Sunroof", "ABS"],
    createdBy: "govind@gmail.com",
    userName: "Govind Varshney",
    postedOn: new Date().toISOString()
  }).returning();

  const listingId = result[0]?.id;

  // Insert into CarImages (linked by carListingId)
  await db.insert(CarImages).values([
    {
      imageUrl: "https://i.ytimg.com/vi/ejcBnaXXh58/maxresdefault.jpg",
      carListingId: listingId
    }
  ]);

  console.log(`✅ Seeded Car Listing with ID ${listingId}`);
}

seed().catch(console.error);
