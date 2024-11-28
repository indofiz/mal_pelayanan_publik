interface ISubItem {
    url: string
    title: string
}

interface IData {
    title: string
    data: ISubItem[]
}
const data: IData[] = [
    {
        title: 'Menu Kami',
        data: [
            { url: 'https://', title: 'Satu Data' },
            { url: 'https://', title: 'Portal Pangkalpinang' },
            { url: 'https://', title: 'Website Pangkalpinang' },
        ],
    },
    {
        title: 'Sosial',
        data: [
            { url: 'https://', title: 'Facebook' },
            { url: 'https://', title: 'Instagram' },
            { url: 'https://', title: 'Tiktok' },
        ],
    },
    {
        title: 'Support',
        data: [
            { url: 'https://', title: 'E-Lapor' },
            { url: 'https://', title: 'Instagram' },
            { url: 'https://', title: 'Tiktok' },
        ],
    },
]

const MenuFooter = () => {
    return (
        <div className="px-4 mt-12 md:flex md:flex-row md:justify-evenly lg:justify-between md:gap-14">
            {data.map((item) => (
                <MenuList item={item} />
            ))}
        </div>
    )
}
export default MenuFooter

export const MenuList = ({ item }: { item: IData }) => {
    return (
        <div className="mb-8 mx-2 md:mx-0">
            <h5 className="text-lg mb-3 font-bold">{item?.title ?? ''}</h5>
            <ul className="flex flex-col gap-3 text-sm">
                {item?.data?.length
                    ? item?.data?.map((subitem) => (
                          <li>
                              <a href={subitem?.url} className="font-light">
                                  {subitem.title ?? ''}
                              </a>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    )
}
