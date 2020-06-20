document.addEventListener('DOMContentLoaded',()=> {
/*DOMContentLoaded event fires when the 
initial HTML document has been completely loaded*/
 
//Card options

const cardItems=[
	{
		name:'c',
		img: 'picture/c.jpg'	
	},
	{
		name:'html',
		img: 'picture/html.png'	
	},
	{
		name:'java',
		img: 'picture/java.jpg'	
	},
	{
		name:'js',
		img: 'picture/js.png'	
	},
	{
		name:'php',
		img: 'picture/php.png'	
	},
	{
		name:'python',
		img: 'picture/python.png'	
	},
	{
		name:'c',
		img: 'picture/c.jpg'	
	},
	{
		name:'html',
		img: 'picture/html.png'	
	},
	{
		name:'java',
		img: 'picture/java.jpg'	
	},
	{
		name:'js',
		img: 'picture/js.png'	
	},
	{
		name:'php',
		img: 'picture/php.png'	
	},
	{
		name:'python',
		img: 'picture/python.png'	
	}
	

	]

cardItems.sort(() => 0.5 - Math.random())
//for each time randomly generating the carditems




const grid = document.querySelector('.grid')
/*The Document method querySelector() returns the 
first Element within the document that matches 
the specified selector, or group of selectors. 
If no matches are found, null is returned.*/

const displayResult = document.querySelector('#result')

var chosenCards=[]
var chosenCardsId=[]
var matchedCards=[]

//create board display
function buildBoard()
{
	for(let i=0;i<cardItems.length;i++)
	{
		var card=document.createElement('img')
		/*This will just create an image element.*/
		card.setAttribute('src','picture/bg1.jpg')
		card.setAttribute('card-id',i)
		card.addEventListener('click',turnCard)
		grid.appendChild(card)
	}
}

//check for matches 
function checkForMatch()
{
	var cards= document.querySelectorAll('img')
	const optionOne = chosenCardsId[0]
	const optionTwo = chosenCardsId[1]

	
    if(optionOne == optionTwo)
	{
        cards[optionOne].setAttribute('src','picture/bg1.jpg')
		cards[optionTwo].setAttribute('src','picture/bg1.jpg')
		alert('oops! clicked the same image again')
		
	}
	else if(chosenCards[0]==chosenCards[1])
	{
		alert('Eureka !! Found a Match')
		cards[optionOne].setAttribute('src','picture/match.jpg')
		cards[optionTwo].setAttribute('src','picture/match.jpg')
		matchedCards.push(chosenCards)
	}
	else
	{
		cards[optionOne].setAttribute('src','picture/bg1.jpg')
		cards[optionTwo].setAttribute('src','picture/bg1.jpg')
		alert('aughhh! try again')
		
	}
	chosenCards=[]
	chosenCardsId=[]
	displayResult.textContent=matchedCards.length
	if(matchedCards.length==cardItems.length/2)
	{
		displayResult.textContent = 'Bravo ! you really have good memory found all'
	}
}


//turn the card
function turnCard()
{
	let cardId = this.getAttribute('card-id')
	chosenCards.push(cardItems[cardId].name)
	chosenCardsId.push(cardId)
	this.setAttribute('src',cardItems[cardId].img)
	if(chosenCards.length==2)
	{
		setTimeout(checkForMatch,450)
	}

}


buildBoard()

})