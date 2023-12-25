const Airtable = require('airtable-node')
// require('dotenv').config()

exports.handler = async(e, ctx) => {
   const airtable = new Airtable({ apiKey: process.env.AIRTABLE_PAT })
      .base('app3G4undptQJQCJY')
      .table('products')
   const {records: data}= await airtable.list()
   console.log(data)
   return {
      statusCode: 200,
      body: JSON.stringify(data)
   }
}