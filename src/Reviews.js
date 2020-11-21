// eslint-disable-entire-file
import './App.css';

function ReviewProduk() {
    const users = [
        {
            "id": 1,
            "name": "Kartika Wulandhari",
            "review": "Barang sangat bagus sekali, rescell!",
            "foto": "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 2,
            "name": "Rachadian Novansyah",
            "review": "Trusted!",
            "foto": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 3,
            "name": "Natasha Kolarov",
            "review": "Original!",
            "foto": "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ];

    const listReviews = users.map((itemReview) =>
        <div key={itemReview.id} className="Item">
            <img src={itemReview.foto} alt="reviewers"/>
            <div className="User">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}</p>
            </div>
        </div>
    );

    return (
        <div className="Reviewbox">
            <h2>Reviews</h2>
            {listReviews}
        </div>
    )
}

export default ReviewProduk;