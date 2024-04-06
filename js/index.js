const handleCategory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);

    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');

    const trimData = data.data;

    //    console.log(trimData);
    trimData.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
    
   

    <a onclick="handleLoadVideos('${item.category_id}')"  role="tab" class="tab bg-base-200 w-28 rounded-lg tab-active">${item.category}</a>
    
    `;


        tabContainer.appendChild(div);
    })
    
};

const handleLoadVideos = async (categoryId) => {
    // console.log(itemId);
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data[0].authors[0].verified);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""; 

    data.data.forEach((video) => {

        // console.log(videos);
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${video.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
        <div class="card-actions ">
        <div>
            <img class="w-12 rounded-full" src="${video.authors[0].profile_picture}" />
        </div>
        <div>
        <h2 class="card-title">
        ${video.title}
    </h2>
        </div>
    </div>
            
           <div>
                     <div class="card-actions ">
                                        <div>
                                        ${video.authors[0].profile_name}
                                         </div>
                                         <div>
                                         <i class="fa-solid fa-certificate"> ${video.authors[0].verified}</i>
                                         </div>
                      </div>

                      <div>

                      <h3> Total Views: ${video.others.views}</h3>
                      </div>
           </div>

          
        </div>

    </div>
   
        
        `;

        cardContainer.appendChild(div);

    });


};

handleCategory();
handleLoadVideos("1000");


{/* <a role="tab" class="tab bg-base-200 w-28 rounded-lg tab-active">${category.data}</a> */ }


{/* <h3> ${data.data[0].authors[0].verified}</h3> */ }