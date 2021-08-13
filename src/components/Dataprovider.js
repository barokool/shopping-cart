import React, { createContext, useState } from 'react'
export const Datacontext = createContext()
export const Dataprovider = (props) => {
    const [products, setProducts] = useState([{
        "_id": "1",
        "title": "Wacth Product 01",
        "images": [
            "https://media-cdn.laodong.vn/storage/newsportal/2020/5/15/805708/Mu-Ky-Quac-Lam-Tu-Lo-16.jpg?w=720&crop=auto&scale=both",
            "https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-anh-1.jpg",
            "https://thegioiloaimeo.com/wp-content/uploads/2019/12/meo-anh-long-ngan2.jpg",
            "https://xommeo.com/wp-content/uploads/2018/11/achocanh-T%E1%BA%A1i-sao-meo-Anh-long-ngan-lai-duoc-gioi-tre-phat-cuong-den-nhu-vay-4.jpg"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 101
    },
    {
        "_id": "2",
        "title": "Wacth Product 02",
        "images": [
            "https://znews-photo.zadn.vn/w660/Uploaded/bpmoqwq1/2014_10_16/con_meo.jpg",
            "https://iupets.vn/wp-content/uploads/2020/05/meo_anh_long_dai.jpg",
            "https://i.ytimg.com/vi/3xmwcshKNBw/maxresdefault.jpg",
            "https://img2.thuthuatphanmem.vn/uploads/2018/11/17/ban-meo-anh-long-dai-ha-noi-hinh-anh-dep-nhat_113432266.jpg"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 102
    },
    {
        "_id": "3",
        "title": "Wacth Product 03",
        "images": [
            "https://photo-cms-tinnhanhchungkhoan.zadn.vn/w660/Uploaded/2021/gtnwae/2021_02_21/z-b-6246.jpg",
            "https://sanphamdayroi.com/wp-content/uploads/5-loai-meo-de-thuong-nhat-the-gioi-Ban-da.jpg",
            "https://sanphamdayroi.com/wp-content/uploads/5-loai-meo-de-thuong-nhat-the-gioi-Ban-da.jpg",
            "https://lh3.googleusercontent.com/proxy/4KqElIH_Qk6nPEfU81Veom1p-RB0Or5a1_cQhtxKN9LEHIHoKgbpi7z1W4AX_jD_sBAa_WjIDwxU4G9FfTOIU0QLIENMl95odBeJe0gpvKSW8abiLra8yJbJtrf5Wyp06qwla1pVZqV2haoD8OOIgiOv3_St0ahK5HGV_cA-Pcke7JeHWlU7ixUPGrM5QvXZKXOAuqawcnfoal14JEDbd_9rgQ2HakzHdhWx-Dq_AHHnNQmZCXO1aJl2dLNBQ8O4FoUmOkeDxS-K6Ep7rYeGaAB5gDqTHBdnBCKr0a81Ns-u8Pefz6LPJg"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 103
    },
    {
        "_id": "4",
        "title": "Wacth Product 04",
        "images": [
            "https://lh3.googleusercontent.com/proxy/YhBsK-LydApbJ6CS90mng3wjtuMkSnD39LdLVEcmxun1iipFFhC50byNnf8NIZ1ah0WO8bRVmo7ZoVV7T-Gk88u6qL9SCbghNWpvtAFwXoEqwXpqX9DdWymP0dIw4bjIf4jkGmro3Fa_k1503GLrXjDYZEqajLoo",
            "https://lh3.googleusercontent.com/proxy/4KqElIH_Qk6nPEfU81Veom1p-RB0Or5a1_cQhtxKN9LEHIHoKgbpi7z1W4AX_jD_sBAa_WjIDwxU4G9FfTOIU0QLIENMl95odBeJe0gpvKSW8abiLra8yJbJtrf5Wyp06qwla1pVZqV2haoD8OOIgiOv3_St0ahK5HGV_cA-Pcke7JeHWlU7ixUPGrM5QvXZKXOAuqawcnfoal14JEDbd_9rgQ2HakzHdhWx-Dq_AHHnNQmZCXO1aJl2dLNBQ8O4FoUmOkeDxS-K6Ep7rYeGaAB5gDqTHBdnBCKr0a81Ns-u8Pefz6LPJg",
            "https://gamek.mediacdn.vn/133514250583805952/2020/2/21/bestie-con-meo-den-2-20170407134700-158229014806951321928.jpg",
            "https://dthezntil550i.cloudfront.net/86/latest/861911302007288750002221253/1280_960/6d5f31fb-62f2-4c12-bbda-e22d08b4ea2a.png"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 104
    },
    {
        "_id": "5",
        "title": "Wacth Product 05",
        "images": [
            "https://zoipet.com/wp-content/uploads/2020/06/mua-meo-muop-o-dau.jpg",
            "https://petshopsaigon.vn/wp-content/uploads/2021/02/meo-muop-la-meo-gi-3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/300px-Felis_catus-cat_on_snow.jpg",
            "https://thegioiloaimeo.com/wp-content/uploads/2020/03/meo-muop-tabby-cat2.jpg"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 105
    },
    {
        "_id": "6",
        "title": "Wacth Product 06",
        "images": [
            "https://i.pinimg.com/236x/e4/21/92/e42192b0682ede9d80d92260fb5e17cd.jpg",
            "https://uocmotulang.vn/wp-content/uploads/2020/06/mo-thay-meo-vang-vao-nha.jpg",
            "https://img.lostbird.vn/2019/11/orange-cat-names-768x432-1.jpg",
            "https://asie.vn/wp-content/uploads/2020/11/meo-vang-1.jpg"
        ],
        "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "colors": ["red", "black", "teal"],
        "sizes": ["XL", "L", "M", "XM", "LX"],
        "price": 106
    }])

    return (
        <Datacontext.Provider value={[products, setProducts]}>
            {props.children}
        </Datacontext.Provider>
    )
}

