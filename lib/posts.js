import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkBreaks from 'remark-breaks'
import rehypeMathjax from 'rehype-mathjax'
import slug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'


// eslint-disable-next-line no-undef
const postsDirectory = path.join(process.cwd(), 'posts')

export function getLearnPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

    const fileNames_learn = fileNames.filter(it => it.includes('learn'))

    const allPostsData = fileNames_learn.map(fileNames_learn => {
        // Remove ".md" from file name to get id
        const id = fileNames_learn.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileNames_learn)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.order < b.order) {
            return 1
        } else {
            return -1
        }
    })
}

export function getGamePostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

    const fileNames_game = fileNames.filter(it => it.includes('game'))

    const allPostsData = fileNames_game.map(fileNames_game => {
        // Remove ".md" from file name to get id
        const id = fileNames_game.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileNames_game)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(remarkParse)
        .use(html)
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkMath)
        .use(remarkRehype)
        .use(slug)
        .use(rehypeMathjax)
        .use(rehypeStringify)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()


    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
        fileContents,
    }
}

