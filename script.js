const product = [
    {
        id : 1,
        productName : `Best Quality Casual T-shirt's for men`,
        imageURL : 'https://static-01.daraz.com.bd/p/ef87a9240de717a86c014c1c1c9f2dfc.jpg_188x188.jpg_.webp',
        price : 120,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam? Aspernatur, molestiae dicta.'
    },
    {
        id : 2,
        productName : 'Doble Part Owl Red T-Shirt For Men - T Shirt - T Shirt',
        imageURL : 'https://static-01.daraz.com.bd/p/6e76fdd143c68cece6a52e03354c2429.jpg_188x188.jpg_.webp',
        price : 200,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam? Aspernatur, molestiae dicta.'
    },
    {
        id : 3,
        productName : '2023 New Fashion Ladies Short Sleeve T-Shirt [Foreign Mastery]',
        imageURL : 'https://static-01.daraz.com.bd/p/a8edde294153b109dfaf98b0595a55f5.jpg_188x188.jpg_.webp',
        price : 1000,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam? Aspernatur, molestiae dicta.'
    },
    {
        id : 4,
        productName : '2023 Summer New Fashionable T-shirt For Men [ High Quality Classical Tops ]',
        imageURL : 'https://static-01.daraz.com.bd/p/3615336171f13e0f82323836d1ecc391.jpg_188x188.jpg_.webp',
        price : 200,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magnam? Aspernatur, molestiae dicta.'
    }
    ];

    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const searchBoxValue = e.target.searchBox.value;
        const searchText = searchBoxValue.toLowerCase();
        console.log(searchText);
        
        const searchedResult = product.filter((value)=>{
            const productTitle = value.productName;
            const title = productTitle.toLowerCase();
            
            // return productTitle.includes(searchBoxValue);
            // return title.includes(searchBoxValue);
            return title.includes(searchText);
            
        } );
        // console.log(searchedResult);

        const rootDiv = document.getElementById('root');

        let htmlCode = ``;
        searchedResult.forEach(value => {
            // console.log(value);
            // console.log(productCard(value));
            const code = productCard(value);
            return htmlCode += code;
            // rootDiv.innerHTML += htmlCode;

        });
        rootDiv.innerHTML = htmlCode;
    });

    function productCard (info) {
        // console.log(info);
        const {productName, imageURL, price, description} = info;
        // console.log(productName)

        // const html =`
        // <div class="product">
        //   <img
        //     src="https://static-01.daraz.com.bd/p/ef87a9240de717a86c014c1c1c9f2dfc.jpg_188x188.jpg_.webp"
        //     alt=""
        //   />
        //   <h2>$200</h2>
        //   <h4>Title</h4>
        //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        // </div>
        // `;


        const html =`
        <div class="product">
          <img
            src="${imageURL}p"
            alt=""
          />
          <h2>$${price}</h2>
          <h4>${productName}</h4>
          <p>${description}</p>
        </div>
        `;

        return html;
    }