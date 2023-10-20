// const account = document.getElementById('account')
// account.children[3].addEventListener('click' , e => {
//    e.preventDefault();
//    window.open("http://127.0.0.1:5500/Projects/BookShop/Login.html")
// })




const infoBookArray = [
   {img:'../svg/Vikings pay ver.svg',name:'Viking' , desc:'The Vikings were a seafaring people from the late eighth to early 11th century who established a name for themselves as traders, explorers and warriors. They discovered the Americas long before Columbus and could be found as far east as the distant reaches of Russia. While these people are often attributed as savages raiding the more civilized nations for treasure and women, the motives and culture of the Viking people are much more diverse. These raiders also facilitated many changes throughout the lands from economics to warfare.', artist:'Robert Leighton', type:'Detective-Love-History',price:'100,000T'},

   {img:'../svg/1984 pay ver.svg',name:'1984' , desc:`The story takes place in an imagined future in the year 1984, when much of the world is in perpetual war. Great Britain, now known as Airstrip One, has become a province of the totalitarian superstate Oceania, which is led by Big Brother, a dictatorial leader supported by an intense cult of personality manufactured by the Party's Thought Police. Through the Ministry of Truth, the Party engages in omnipresent government surveillance, historical negationism, and constant propaganda to persecute individuality and independent thinking.`, artist:'George Orwell', type:'Novels-ScienceFiction-Fantasy',price:'90,000T',audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`},

   {img:'../svg/Shelock pay ver.svg',name:'Sherlock Holmes' , desc:`Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle…`, artist:'Gumus Simsek',type:'Detective-Love-History',price:'135,000T',audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`,audio:`https://download.taaghche.com/download/4uMXAtaiiew9JoQIjK8FAp5ihiGQTDCq`},

   {img:'../svg/12 Ruls 1.svg',name:'12 Rules for Life' , desc:`12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by the Canadian clinical psychologist Jordan Peterson. It provides life advice through essays in abstract ethical principles, psychology, mythology, religion, and personal anecdotes. The book topped bestseller lists in Canada, the United States, and the United Kingdom, and had sold over five million copies worldwide by the end of 2020.Peterson went on a world tour to promote the book, receiving much attention following an interview with Channel 4 News.The book is written in a more accessible style than his previous academic book, Maps of Meaning: The Architecture of Belief (1999).A sequel, Beyond Order: 12 More Rules for Life, was published in March 2021.`, artist:'Jordan Peterson',type:'Self help-Psychology-Philosophy',price:'160,000T',audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`,audio:`https://api.fidibo.com/audio/sample_12_ghanoon_zendegi.mp3`},

   {img:'../svg/13 resone 1.svg',name:'Thirteen Reasons Why' , desc:`Thirteen Reasons Why (stylized as TH1RTEEN R3ASONS WHY) is a young adult novel written by Jay Asher in 2007, that follows the story of Hannah Baker, a high school freshman, and the thirteen reasons why she dies by suicide.[1] Following her death, Hannah leaves behind a series of 7 double-sided cassette tapes detailing the 13 specific people and events that she blames for her demise.[1] Two weeks after her death these cassette tapes are mailed out with directions to pass the tapes on to the next person on the tape.Hannah's life story is conveyed through these tapes, which are narrated by Hannah herself, and through the point of view of Clay, her classmate and the ninth person to receive the tapes.[1] The inspiration behind the main character, Hannah Baker, comes from author Jay Asher's close relative who attempted suicide.`, artist:'Jay Asher',type:'Novel',price:'180,000T',audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`,audio:`https://download.taaghche.com/download/BLSHuqaJr4fQ5Wqi6YyMNUuAagUSI12g`},

   {img:'../svg/Animal Farm 1.svg',name:'Animal Farm' , desc:`Animal Farm is a beast fable, in the form of a satirical allegorical novella, by George Orwell, first published in England on 17 August 1945. It tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and under the dictatorship of a pig named Napoleon, the farm ends up in a state as bad as it was before.`, artist:'George Orwell',type:'Novella',price:'90,000T',audio:`https://download.taaghche.com/download/BNsC3JZi0wxDP8YZrpPNVs0QQS4ToMUG`},

   {img:'../svg/atomic habits 1.svg',name:'Atomic Habits' , desc:`Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time`, artist:'James Clear',type:'Self help',price:'95,000T',audio:`https://download.taaghche.com/download/cFOzqdM39qlRsbHNy09siq4pwCMKOXMi`},

   {img:'../svg/alber cumus 1.svg',name:'The Stranger' , desc:`The title character is Meursault, an indifferent French settler in Algeria described as "a citizen of France domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the traditional Mediterranean culture." Weeks after his mother's funeral, he kills an Arab man in French Algiers, who was involved in a conflict with one of Meursault's neighbors. Meursault is tried and sentenced to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and after the murder, respectively.`, artist:'George Orwell',type:'Novel',price:'70,000T',audio:`https://download.taaghche.com/download/U38IcP5aoPnTaZDWnncB24tbmv1NH9sT`},

   {img:'../svg/9-november.jpg',name:'9 November' , desc:`Fallon meets Ben, an aspiring novelist, the day before her scheduled cross-country move. Their untimely attraction leads them to spend Fallon’s last day in Los Angeles together, and her eventful life becomes the creative inspiration Ben has always sought for his novel. Over time and amidst the various relationships and tribulations of their own separate lives, they continue to meet on the same date every year. Until one day Fallon becomes unsure if Ben has been telling her the truth or fabricating a perfect reality for the sake of the ultimate plot twist.`, artist:'Colleen Hoover',type:'Novel',price:'120,000T'},

   {img:'../svg/call-me-by-your-name.jpg',name:'Call Me By Your Name' , desc:`Call Me by Your Name is a 2007 coming-of-age novel by American writer André Aciman that centers on a blossoming romantic relationship between an intellectually precocious, curious, and pretentious 17-year-old American-Italian Jewish boy named Elio Perlman and a visiting 24-year-old American Jewish scholar named Oliver in 1980s Italy. The novel chronicles their summer romance and the 20 years that follow. A sequel to the novel, Find Me, was released in October 2019.`, artist:'André Aciman',type:'Novel',price:'110,000T',audio:`https://audiofilemagazine.com/PodBus/clips/127680.mp3`},

   {img:'../svg/emily-bronte.jpg',name:'Wuthering Heights' , desc:`In 1801, Mr Lockwood, the new tenant at Thrushcross Grange in Yorkshire, pays a visit to his landlord, Heathcliff, at his remote moorland farmhouse, Wuthering Heights. There he meets a reserved young woman (later identified as Cathy Linton), Joseph, a cantankerous servant, and Hareton, an uneducated fellow, who presents himself as such. Everyone is sullen and inhospitable. Snowed in for the night, Lockwood reads the diary of the former inhabitant of his room, Catherine Earnshaw, and has a nightmare in which a ghostly Catherine begs to enter through the window. Awakened by Lockwood's fearful yells, Heathcliff is troubled.`, artist:'Emily Brontë',type:'Novel-Gothic fiction-Romance novel',price:'140,000T',audio:`https://dl2.ketabrah.ir/dl/s/d397b991-c6de-43d0-a4d0-19957a0abc24`},

   {img:'../svg/the-midnight-libraty.jpg',name:'The Midnight Library' , desc:`The book's protagonist is a young woman named Nora Seed who is unhappy with her choices in life. During the night, she tries to kill herself but ends up in a library managed by her school librarian, Mrs. Elm. The library is situated between life and death with millions of books filled with stories of her life had she made some different decisions. In this library, she then tries to find the life in which she's the most content.[3] For example, in one possible life she tries to reunite with her boyfriend and finds herself married to him, but it isn't the way as she expected. She also sees herself as a glaciologist doing research in the Svalbard archipelago in the Arctic – a very different life from the one she tries to escape, but not necessarily a better choice.`, artist:'Matt Haig',type:'Science fiction-Fantasy Fiction-Philosophical fiction',price:'165,000T',audio:`https://dl2.ketabrah.ir/dl/s/55fac56c-09cf-4eb6-87be-b9f182ea9024`},

   {img:'../svg/the-guest-list.jpg',name:'The Guest List' , desc:`The book's protagonist is a young woman named Nora Seed who is unhappy with her choices in life. During the night, she tries to kill herself but ends up in a library managed by her school librarian, Mrs. Elm. The library is situated between life and death with millions of books filled with stories of her life had she made some different decisions. In this library, she then tries to find the life in which she's the most content.[3] For example, in one possible life she tries to reunite with her boyfriend and finds herself married to him, but it isn't the way as she expected. She also sees herself as a glaciologist doing research in the Svalbard archipelago in the Arctic – a very different life from the one she tries to escape, but not necessarily a better choice.`, artist:'Lucy Foley',type:'Thriller-Mystery-Psychological Fiction',price:'95,000T',audio:`https://audiofilemagazine.com/PodBus/clips/178271.mp3`},

  
   {img:'../svg/22.jpg',name:`22 Seconds`,desc:`THE #1 NEW YORK TIMES BESTSELLER! 22 seconds... until Lindsay Boxer loses her badge—or her life. SFPD Sergeant Lindsay Boxer has guns on her mind.   There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws.
`,artist
:`James Patterson`,type:` Fiction, Mystery, Thriller, Suspense, Police procedural`,price:`300,000T`,audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`},

   

  
   
   {img:'../svg/the candy house.jpg',name:`The Candy House`,desc:`You don’t need to have read Egan’s Pulitzer-winning “A Visit From the Goon Squad” to jump feet first into this much-anticipated sequel. But for lovers of the 2010 book’s prematurely nostalgic New Yorkers, cerebral beauty and laser-sharp take on modernity, “The Candy House” is like coming home — albeit to dystopia. This time around, Egan’s characters are variously the creators and prisoners of a universe in which, through the wonders of technology, people can access their entire memory banks and use the contents as social media currency. The result is a glorious, hideous fun house that feels more familiar than sci-fi, all rendered with Egan’s signature inventive confidence and — perhaps most impressive of all — heart. “The Candy House” is of its moment, with all that implies.`,artist
:`Jennifer Egan`,type:`Fiction`,price:`250,000T`,audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`,audio:`https://audiofilemagazine.com/PodBus/clips/211950.mp3`},

{img:'../svg/The  flowers.jpg',name:`The Furrows`,desc:`After losing her brother when she was 12, one of the narrators of Serpell’s second novel keeps coming across men who resemble him as she works through her trauma long into adulthood. She enters an intimate relationship with one of them, who’s also haunted by his past. This richly layered book explores the nature of grief, how it can stretch or compress time, reshape memories and make us dream up alternate realities. “I don’t want to tell you what happened,” the narrator says. “I want to tell you how it felt.”

`,artist
:`Namwali Serpell`,type:`Novel`,price:`225,000T`,audio:`https://audiofilemagazine.com/PodBus/clips/224531.mp3`},

{img:'../svg/Trust.jpg',name:`Trust`,desc:`Diaz uncovers the secrets of an American fortune in the early 20th century, detailing the dizzying rise of a New York financier and the enigmatic talents of his wife. Each of the novel’s four parts, which are told from different perspectives, redirects the narrative (and upends readers’ expectations) while paying tribute to literary titans from Henry James to Jorge Luis Borges. Whose version of events can we trust? Diaz’s spotlight on stories behind stories seeks out the dark workings behind capitalism, as well as the uncredited figures behind the so-called Great Men of history. It’s an exhilarating pursuit.
`,artist
:`Hernan Diaz`,type:`Novel`,price:`285,000T`,audio:`https://media.audiobooksnow.com/index.php?page=download_web&action=playsample&data=OTc4MDU5MzU1NzExMjIwMjMwMzE2`},

{img:'../svg/stay.jpg',name:`Stay True: A Memoir`,desc:`In this quietly wrenching memoir, Hsu recalls starting out at Berkeley in the mid-1990s as a watchful music snob, fastidiously curating his tastes and mercilessly judging the tastes of others. Then he met Ken, a Japanese American frat boy. Their friendship was intense, but brief. Less than three years later, Ken would be killed in a carjacking. Hsu traces the course of their relationship — one that seemed improbable at first but eventually became a fixture in his life, a trellis along which both young men could stretch and grow.
`,artist
:`Hua Hsu`,type:`Nonfiction`,price:`185,000T`,audio:`https://media.audiobooksnow.com/index.php?page=download_web&action=playsample&data=OTc4MDU5MzYyODE4ODIwMjMwMzE2`},

{img:'../svg/it strarts with us.jpg',name:`It Starts with Us`,desc:`It Starts with Us is a romance novel by Colleen Hoover, published by Atria Books on October 18, 2022. It is the sequel to her 2016 best-selling novel It Ends with Us. The sequel was first announced in February 2022. It became Simon & Schuster's most pre-ordered book of all time.
`,artist
:`Colleen Hoover`,type:`romance novel `,price:`155,000T`,audio:`https://media.audiobooksnow.com/index.php?page=download_web&action=playsample&data=OTc4MTc5NzE0NTA4MjIwMjMwMzE2`},

{img:'../svg/the-fault-in-our-stars.jpg',name:'The Fault in Our Stars' , desc:`Hazel Grace Lancaster, a 16-year-old with thyroid cancer that has spread to her lungs, attends a cancer patient support group at her mother's behest. At one meeting, Hazel meets a 17-year-old boy currently in remission named Augustus Waters, whose osteosarcoma caused him to lose his right leg. Augustus is at the meeting to support Isaac, his friend who has eye cancer. Hazel and Augustus strike a bond immediately and agree to read each other's favorite novels. Augustus gives Hazel The Price of Dawn, and Hazel recommends An Imperial Affliction, a novel about a cancer-stricken girl named Anna that parallels Hazel's own experience. After Augustus finishes reading her book, he is frustrated upon learning that the novel ends abruptly without a conclusion, as if Anna had died suddenly. Hazel explains the novel's author, Peter van Houten, retreated to Amsterdam following the novel's publication and has not been heard from since.`, artist:'John Green',type:'fiction-realistic',price:'160,000T',audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`},

{img:'../svg/Things-we-nver-got-over.jpg',name:'Things We Never Got Over',desc:`"Knox Morgan doesn't tolerate drama, especially in the form of a stranded runaway bride. Naomi Witt is on the run. Not just from her fiancé and a church full of well-wishers, but from her entire life. Although if you ask her, Naomi's riding to the rescue of her estranged hot mess of a twin, Tina, to Knockemout, a rough-around-the-edges town where disputes are settled the old-fashioned way...with fists and beer. Usually in that order. Too bad for Naomi, her evil twin hasn't changed at all. After helping herself to Naomi's car and cash, Tina leaves behind something unexpected: the niece Naomi didn't know she had. Now she's a guardian to an eleven-year-old-going-on-thirty with no car, no money, and no plan. There's a reason this bearded, bad-boy barber doesn't get involved with high-maintenance women, especially not Type-A romantic ones. But since Naomi's life imploded right in front of him, the least Knox can do is help her out of her jam. And just as soon as she stops getting into new trouble, he can leave her alone and get back to his quiet, solitary life. At least, that's the plan"--`,artist:`Lucy Score`,type:`Romance novel, Fiction, Contemporary romance, Thriller, Suspense`,price:`70,000T` ,audio:`https://download.taaghche.com/download/pZIFHQOsexKUubja2QITdSTqM74UmCaE`},
]

const stringify = JSON.stringify(infoBookArray)
localStorage.setItem('LcInfoBook' , stringify)

const account1 = document.getElementById('account1')

const funcToLoginImg = () => {
   
      
      account1.children[3].addEventListener('click' , e => {
         e.preventDefault();
        
         window.open("/src/Login/Login.html" , '_self')
     
      })

}

funcToLoginImg();


 const funcToSaveList = () => {
   account1.children[2].addEventListener('click' , e => {
      e.preventDefault();

      window.open("/src/SaveList/SaveList.html" , '_self')
   })

}


funcToSaveList();





const funcToHomeNav = () => {

   const nav1 = document.getElementById('nav1')
      nav1.children[0].children[0].addEventListener('click' , e => {
         e.preventDefault();
         location.reload();
      })
   }




funcToHomeNav();
const createMenu = () => {

   const menuList = document.getElementById('menuList')
   
   const menuListArray = ['Detective','Love','Novel','History','Science fiction','Fantastic','More']
  
   for (const index in menuListArray) {
      const liList = document.createElement('li')
      liList.style.cursor = 'pointer'
      liList.innerText = menuListArray[index]
      menuList.appendChild(liList)
   
   }

  
}
createMenu();
 



// const btnOrder1 = document.getElementById('btnOrder1')
// const btnOrder2 = document.getElementById('btnOrder2')
// const btnOrder3 = document.getElementById('btnOrder3')

// const btnArray = [btnOrder1,btnOrder2,btnOrder3]

// for (const index in btnArray) {
//    btnArray[index].addEventListener('click' , e => {
//       e.preventDefault();
//       const getInfoBook = localStorage.getItem('Lc')
      

//       if(getInfoBook){
//          const parseInfo = JSON.parse(getInfoBook)
//          console.log(parseInfo)
//          const copyInfo = [...parseInfo,infoBookArray[index]]
//          const stringify = JSON.stringify(copyInfo)
//          localStorage.setItem('Lc',stringify)
//       }else if(!getInfoBook){
//          const stringify = JSON.stringify([infoBookArray[index]])
//          localStorage.setItem('Lc',stringify)
//       }

//       window.open('http://127.0.0.1:5500/Projects/BookShop/cardPay.html')

//    })
// }


const btnOrderNow = document.querySelectorAll('.btn-order-book')


const switchToCardPay = () => {

   btnOrderNow.forEach((item,index) => {

   item.addEventListener('click' , e => {

      e.preventDefault();

      
      const getInfoBook = localStorage.getItem('Lc')
      const parseInfo = JSON.parse(getInfoBook)
            
      
      if(parseInfo && parseInfo.length > 0){
               
         const copyInfo = [...parseInfo,infoBookArray[index]]
         const stringify = JSON.stringify(copyInfo)
         localStorage.setItem('Lc' , stringify)
         console.log(document.title)
         
      }else if(!parseInfo){
         const stringify = JSON.stringify([infoBookArray[index]])
         localStorage.setItem('Lc',stringify)
         console.log(document.title)
      }

            // if(parseInfo && parseInfo.length > 0){
               
            //    const copyInfo = [...parseInfo,infoBookArray[index]]
            //    const stringify = JSON.stringify(copyInfo)
            //    console.log(copyInfo)
               
            //    const finalResult = checkSameBook(parseInfo,infoBookArray[index])
               
            //    if(finalResult != 'matched'){
            //       localStorage.setItem('Lc',stringify)
            //    }
              
            // }else if(!parseInfo){
            //    const stringify = JSON.stringify([infoBookArray[index]])
            //    localStorage.setItem('Lc',stringify)
            // }

            

            window.open('/src/Pay/cardPay.html' , '_self')
   })
         
})

}

switchToCardPay();




function checkSameBook(parseInfo,infoBookArrayEl) {
   for (const key in parseInfo) {
      if(parseInfo[key].name == infoBookArrayEl.name){
         console.log('matched' , parseInfo[key],infoBookArrayEl)
         let result = 'matched'
         return result
      }
   }
}




function scroll (){
   let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll' , function(){
   let scrollTop = window.scrollY
   let documentHeight = document.body.clientHeight
   let windowHeight = window.innerHeight
   let scrollPercent = scrollTop / (documentHeight - windowHeight)
   let scrollPercentRounded = (scrollPercent * 100)
   customScroll.style.width = scrollPercentRounded + '%'

})
}
scroll()




const search = document.getElementById('searchBar')
search.value = null
const searchLogo = document.getElementById('searchLogo')

searchLogo.addEventListener('click' , e => {
   e.preventDefault();
   console.log(search.value)

   const getInfoBook = localStorage.getItem('Lc')
   const parseInfo = JSON.parse(getInfoBook)

   infoBookArray.forEach((element,index) => {
      console.log(element.name)
      if(search.value === element.name){
      
   if(parseInfo && parseInfo.length > 0){
  
      const copyInfo = [...parseInfo,infoBookArray[index]]
      const stringify = JSON.stringify(copyInfo)
      localStorage.setItem('Lc' , stringify)
      window.open('/src/Pay/cardPay.html' , '_self')
    
   }else if(!parseInfo){
      const stringify = JSON.stringify([infoBookArray[index]])
      localStorage.setItem('Lc',stringify)
      window.open('/src/Pay/cardPay.html' , '_self')
   }
   
      }else if(search.value != element.name){
         return
      }
   })

   
})
