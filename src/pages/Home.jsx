import React from 'react'
import '../styles/Home.css'
import ItemHome from '../items/ItemHome'
import Pagingation from '../components/Pagingation'
const Home = () => {
    const itemStatistical = [
        {
            background: '#FFCC99',
            icon: 'assets/people.png',
            title: 'Accounts',
            statistical: '10,012'
        },
        {
            background: '#97FFFF',
            icon: 'assets/products.png',
            title: 'Products',
            statistical: '2,300,328'
        },
        {
            background: '#EE82EE',
            icon: 'assets/storecolor.png',
            title: 'Stores',
            statistical: '120'
        },
        {
            background: '#D2B48C',
            icon: 'assets/bill.png',
            title: 'Bills',
            statistical: '986,444'
        },
    ]
    const itemProducts = [
        {
            image: 'https://toigingiuvedep.vn/wp-content/uploads/2022/04/ao-thun-in-hinh-1.jpg',
            name: 'Áo thun in hình',
            price: '210.000vnd',
            totalOrder: '100',
            index: 1
        },
        {
            image: 'https://ferado.vn/images/product/giay-nam-gia-re-1587723293_giay-nam-gia-re.jpg',
            name: 'Dày gia nam',
            price: '590.000vnd',
            totalOrder: '98',
            index: 2
        },
        {
            image: 'https://filebroker-cdn.lazada.vn/kf/Sc3c175e3adfd470aadd84b3107f1720dq.jpg',
            name: 'Balo thời trang',
            price: '310.000vnd',
            totalOrder: '85',
            index: 3
        },
        {
            image: 'https://vn-live-01.slatic.net/p/cf8553bfffe718788d752eb4e5fa255c.jpg',
            name: 'Quần bò ống vuông nữ',
            price: '310.000vnd',
            totalOrder: '77',
            index: 4
        },
    ]
    return (
        <>
            <p className='title-home'>Trang chủ</p>
            <div className="statistical">
                <p className="title-block">Statistical</p>
                <div className="item-statistical">
                    {
                        itemStatistical.map((item, index) => (
                            <div className='contaner-statistical'>
                                <div className="statistical-icon" style={{ backgroundColor: `${item.background}` }}>
                                    <img src={require(`../${item.icon}`)} alt={item.name} />
                                </div>
                                <div>
                                    <div className="statistical-number">{item.statistical}</div>
                                    <div className="statistical-title">{item.title}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="selling">
                <p className="title-block">Top selling</p>

                <div className="title-table">
                    <p>Index</p>
                    <p>Image</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Total order</p>
                    <p>View</p>
                </div>

                {
                    itemProducts.map((item, index) => (
                        <div key={index}>
                            <ItemHome product={item} />
                        </div>
                    ))
                }
                <Pagingation />


            </div>

        </>
    )
}

export default Home