window.onload = function Card(bookNumber, bookName, catagory, author, language, pages, price, binding){
    return `
    
    <div class="card">
      <div class="card2">
        <img src="images/${bookNumber}.jpg" alt="${bookName}"/>
      </div>
      <h2>${bookName}</h2>
      <div class="detail">
        <p>${catagory}</p>
        <p>${author}</p>
        <p>زبان : ${language} </p>
        <p>صفحات : ${pages}</p>
        <p>قیمت : ${price} روپے</p>
        <p>بائنڈنگ : ${binding}</p>
      </div>
      <div class="download-container">
        <div class="card2">
          <button class="download-button" id="download-book" onclick="OpenInNewTab(pageLink + '${bookNumber}')">
            <h2>Download</h2>
          </button>
        </div>
        <div class="card2">
          <button class="download-button" id="purchase-book">
            <h2>Purchase</h2>
          </button>
        </div>
      </div>
      <div class="download-container">
        <div class="card2">
          <button class="download-button" id="download-book" onclick="OpenInNewTab(pageLink + '${bookNumber}')">
            <h2>Visit Official Website</h2>
          </button>
        </div>
      </div>
    </div>
    
    `;
}
const container = document.getElementById('BookCards');

const cardData = [
    {bookName: 'تفسیر اعوذ باللہ من الشّیطانِ الرّجیمِ<br>حکمت استعاذہ', bookNumber: '5', catagory: 'القرآن و علوم القرآن', author: 'شیخ الاسلام ڈاکٹر محمد طاہرالقادری', language: 'اردو', pages: '25', price: '50', binding: 'Card'},
    {bookName: '', bookNumber: '', catagory: '', author: '', language: '', pages: '', price: '', binding: ''},
]

cardData.forEach(card => {
    
    container.innerHTML += Card(card.bookNumber, card.bookName, card.catagory, card.author, card.language, card.pages, card.price, card.binding);

});