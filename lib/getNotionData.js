import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getNotionData = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // Sort posts in descending order based on the Date column.
    // sorts: [
    //   {
    //     name: 'Date',
    //     // direction: 'descending',
    //   },
    // ],
  })

  return response.results
}
// const { Client } = require('@notionhq/client')

// const notion = new Client({ auth: process.env.NOTION_TOKEN })

// export const detNotionData =  async (databaseId) => {
//   try {
//     const response = await notion.pages.create({
//       parent: {
//         database_id: process.env.NOTION_DATABASE_ID,
//       },
//       properties: {
//         name: {
//           title: [
//             {
//               text: {
//                 content: 'new title yeah!!',
//               },
//             },
//           ],
//         },
//       },
//     })
//     console.log(response)
//     return response
//   } catch (error) {
//     return error
//   }
// }
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response.results
}
