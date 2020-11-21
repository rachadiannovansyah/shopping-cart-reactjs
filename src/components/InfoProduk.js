import './../App.css';
import PropTypes from 'prop-types';

function InfoProduk(props) {
    const { category, name, isDiscount } = props;
    const benefits = ["Lifetime", "Guaranteed", "Low cc"];
    const listBenefits = benefits.map((itemBenefit) =>
        <li key={itemBenefit}>{itemBenefit}</li>
    );
    return (
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Price"> Rp. 15.000.000 </p>
            <CheckDiscount isDiscount={isDiscount} discount={50} />
            <p className="Info">
                Apple MacBook Pro 2020 
                <br></br>
                Storage 512GB 
                <br></br>
                2.6GHz MVVJ2 Space Gray with Touch Bar and Touch ID
                <br></br>
                9th Gen Intel Core i7 Processor 2.6GHz up to 4.5GHz Processor
                <br></br>
                Retina display with True Tone & Touch Bar and Touch ID
                <br></br>
                4GB AMD Radeon Pro 5300M, Four Thunderbolt 3 ports
                <br></br>
                16GB of 2666MHz DDR4 , 512GB SSD storage
                <br></br>
                Backlit Keyboard - US English
            </p>
            <ul>
                {listBenefits}
            </ul>
            <a onClick={(e) => TambahProduk(name, e)} href="https://www.tokopedia.com/tokohapedia/apple-macbook-pro-16-2019-512gb-mvvj2-space-gray-with-touchbar-resmi-apple?src=topads" target="_blank">Add to chart</a>
        </div>
    );
}

function CheckDiscount(props) {
    const { isDiscount, discount } = props;
    if (isDiscount === "yes") {
        return (
            <p>Diskon {discount}% Off!</p>
        );
    }
    else if (isDiscount === "comingsoon") {
        return (
            <p>Diskon coming soon..</p>
        );
    }
}

function TambahProduk(e) {
    return console.log('Membeli produk ' + e);
}

CheckDiscount.propTypes = {
    discount: PropTypes.number.isRequired
};

export default InfoProduk;