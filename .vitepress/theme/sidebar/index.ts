import { DefaultTheme } from 'vitepress'
import { glob } from 'glob'

let sidebar: DefaultTheme.Sidebar =  []

// 遍历博客目录获取信息
const sidebar_data = glob.sync("posts/**/*.md")
                        .map(
                            (path) => (path.replaceAll('\\', '/'))
                            )
                        .map(
                            (post) => ({
                                link: '/' + post.split('.')[0] + '.html',
                                text: post.split(/[/.]/).slice(-2, -1)[0],
                                tag: post.split('/').slice(-2, -1)[0],
                            })
                        )
                        .reduce(
                            (sidebar_items, post) => {
                                if(!sidebar_items[post.tag]) {
                                    sidebar_items[post.tag] = [];
                                }

                                sidebar_items[post.tag].push(post);

                                return sidebar_items;
                            },
                            {}
                        )

// 构建最终数据结构
const sortedCategory = Object.keys(sidebar_data).sort()
sortedCategory.forEach(category => {
    const sidebar_item:DefaultTheme.SidebarItem = {
        text: category.charAt(0).toUpperCase() + category.slice(1),
        collapsed: true,
        items: sidebar_data[category].map(
            (post) => ({
                link: post.link,
                text: post.text
            })
        )
    }
  sidebar.push(sidebar_item)
})

export default sidebar