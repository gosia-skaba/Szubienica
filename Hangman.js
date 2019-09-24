var sentences = new Array (50);
sentences[0] = "Bez pracy nie ma kołaczy";
sentences[1] = "Kto pod kim dołki kopie te sam w nie wpada";
sentences[2] = "Gdzie kucharek sześć tam nie ma co jeść";
sentences[3] = "W czasie suszy szosa sucha";
sentences[4] = "Ziarnko do ziarnka a uzbiera się miarka";
sentences[5] = "Apetyt rośnie w miarę jedzenia";
sentences[6] = "Biednemu zawsze wiatr w oczy";
sentences[7] = "Co cię nie zabije, to cię wzmocni";
sentences[8] = "Czego Jaś się nie nauczy, tego Jan nie będzie umiał";
sentences[9] = "Darowanemu koniowi w zęby się nie zagląda";
sentences[10] = "Dla chcącego nic trudnego";
sentences[11] = "Dzieci i ryby głosu nie mają";
sentences[12] = "Gdy kota nie ma, myszy harcują";
sentences[13] = "Głupi ma zawsze szczęście";
sentences[14] = "Grosz do grosza, a będzie kokosza";
sentences[15] = "Hulaj dusza, piekła nie ma";
sentences[16] = "Jajko mądrzejsze od kury";
sentences[17] = "Jak Kuba Bogu, tak Bóg Kubie";
sentences[18] = "Jak się nie ma co się lubi, to się lubi co się ma";
sentences[19] = "Jak sobie pościelesz, tak się wyśpisz";
sentences[20] = "Jak trwoga, to do Boga";
sentences[21] = "Jedna jaskółka wiosny nie czyni";
sentences[22] = "Każdy jest kowalem swego losu";
sentences[23] = "Kłamstwo ma krótkie nogi";
sentences[24] = "Kogut myślał o niedzieli, a w sobotę łeb ucięli";
sentences[25] = "Kto pierwszy ten lepszy";
sentences[26] = "Kto pod kim dołki kopie, ten sam w nie wpada";
sentences[27] = "Kto pyta, nie błądzi";
sentences[28] = "Kto rano wstaje, temu Pan Bóg daje";
sentences[29] = "Kto się czubi, ten się lubi";
sentences[30] = "Lepiej nosić,jak się prosić";
sentences[31] = "Lepszy rydz niż nic";
sentences[32] = "Lepszy wróbel w garści niż gołąb na dachu";
sentences[33] = "Ładnemu we wszystkim ładnie";
sentences[34] = "Mądry Polak po szkodzie";
sentences[35] = "Mowa jest srebrem, a milczenie złotem";
sentences[36] = "Nie chce góra przyjść do Mahometa, musi Mahomet przyjść do góry";
sentences[37] = "Dzielić skórę na niedźwiedziu";
sentences[38] = "Nie ma tego złego, co by na dobre nie wyszło";
sentences[39] = "Nie mów drugiemu, co tobie nie miłe";
sentences[40] = "Nieszczęścia chodzą parami";
sentences[41] = "Nie wchodzi się dwa razy do tej samej rzeki";
sentences[42] = "Paluszek i główka to szkolna wymówka";
sentences[43] = "Pieniądze szczęścia nie dają";
sentences[44] = "Starość nie radość, młodość nie wieczność";
sentences[45] = "Strzeżonego Pan Bóg strzeże";
sentences[46] = "Trafić z deszczu pod rynnę";
sentences[47] = "Wszystko, co dobre, szybko się kończy";
sentences[48] = "Wystroił się jak stróż w Boże ciało";
sentences[49] = "Żeby kózka nie skakała, to by nóżki nie złamała";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random = getRandomIntInclusive (0,49);
var password = sentences[random];
password = password.toUpperCase();

var	password_length = password.length;

var hidden_password = "";
var life = 0;
var yes = new Audio("wave/yes.wav");
var no = new Audio("wave/no.wav");
var win = new Audio("wave/win.wav");
var lose = new Audio("wave/lose.wav");

for(var i = 0; i <= password_length-1; i++)
{
	switch (password.charAt(i))
	{
		case "'":
			hidden_password=hidden_password + "'";
			break;
		case ".":
			hidden_password=hidden_password + ".";
			break;
		case ",":
			hidden_password=hidden_password + ",";
			break;
		case "!":
			hidden_password=hidden_password + "!";
			break;
		case "?":
			hidden_password=hidden_password + "?";
			break;
		case " ":
			hidden_password=hidden_password + " ";
			break;
		case ";":
			hidden_password=hidden_password + ";";
			break;
		case ":":
			hidden_password=hidden_password + ":";
			break;
		default:
			hidden_password=hidden_password + "_";
	}



	// if(password.charAt(i) ==" ")
	// {
	// 	hidden_password=hidden_password + " ";
	// }
	// if (password.charAt(i)==".") 
	// {
	// 	hidden_password=hidden_password + ".";
	// }
	// else
	// {
	// 	hidden_password=hidden_password + "-";
	// }
}

function write_password()
{
	document.getElementById("board").innerHTML = hidden_password;
}
window.onload = start;

var letter=new Array(35);
letter[0] = "A";
letter[1] = "Ą";
letter[2] = "B";
letter[3] = "C";
letter[4] = "Ć";
letter[5] = "D";
letter[6] = "E";
letter[7] = "Ę";
letter[8] = "F";
letter[9] = "G";
letter[10] = "H";
letter[11] = "I";
letter[12] = "J";
letter[13] = "K";
letter[14] = "L";
letter[15] = "Ł";
letter[16] = "M";
letter[17] = "N";
letter[18] = "Ń";
letter[19] = "O";
letter[20] = "Ó";
letter[21] = "P";
letter[22] = "Q";
letter[23] = "R";
letter[24] = "S";
letter[25] = "Ś";
letter[26] = "T";
letter[27] = "U";
letter[28] = "V";
letter[29] = "W";
letter[30] = "X";
letter[31] = "Y";
letter[32] = "Z";
letter[33] = "Ź";
letter[34] = "Ż";




function start()
{
	var div_content = "";

	//tworzenie kodu html dla wszystkich liter
	for (i=0;i<=34;i++)
	{
		var element = "let"+i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="' + element +'">' +letter[i]+ '</div>';
		if ((i+1)%7 == 0 )
		{
			div_content= div_content + '<div style="clear:both;"/></div>';
		}
	}

	document.getElementById("letters").innerHTML = div_content;


	write_password();
}



//klasa o nazwie String.prototype.nazwa funkcji = function (dwa argumenty)
String.prototype.setChar = function(position, character){

	if (position>this.length-1)
	{

		return this.toString();
	}
	else {
		
		return this.substr(0, position) + character + this.substr(position+1);
	}
	
};


function check(nr)
{

	var hit = false;
	for(i=0;i<password_length;i++)
	{
		if (password.charAt(i)==letter[nr])
		{
			hidden_password = hidden_password.setChar(i,letter[nr]);
			hit = true;
		}
	}

	if(hit==true)
	{
		yes.play();
		var element = "let"+ nr;
		document.getElementById(element).style.background ="#003300";
		document.getElementById(element).style.color ="#00C000";
		document.getElementById(element).style.border ="2px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");



		write_password();
	}
	else 
	{

		var element = "let"+ nr;
		document.getElementById(element).style.background ="#330000";
		document.getElementById(element).style.color ="#C00000";
		document.getElementById(element).style.border ="2px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");

		no.play();

		//life -- 
		life++;
		var image = "img/s"+life+".jpg";
		document.getElementById("gallows").innerHTML = '<img src="'+image+'" alt=""/>';

	}

	//win
	if (password==hidden_password)
	{
		document.getElementById("letters").innerHTML = "Brawo!!! Odgadłes poprawnie hasło!<br/><br/>"  + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE?<span/>';
		win.play();
	}

	//lose
	if (life >=9)
	{
			document.getElementById("letters").innerHTML = "Niestety przegrałeś!<br/><br/>" + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?<span/>';
			lose.play();

	}

	
}



