var LanguageList = {
	"EN" : "English",
	"ID" : "Bahasa Indonesia",
};

//languages Objects
var WORDS_EN = {
	"menuHome"		: "Home",
	"menuAbout"		: "About",
	"menuServices"	: "Services",
	"menuPortfolio"	: "Portfolio",
	"menuContact"	: "Contact",
	"heroH1" 		: "Grow your business with us",
	"heroH2" 		: "We help you to show your business in digital world",
	"heroDiv1"		: "Our Services",
	"aboutH2"		: "About Us",
	"aboutP1"		: "ElektroPos established in 2018, starting from hobby in free time, and some times helping relatives in their project.",
	"aboutP2"		: "After a year, ElektroPos started to give services professionally, such as:",
	"aboutLi1"		: "Project management with tight deadline and high accuracy",
	"aboutLi2"		: "Integrity and up-to-date knowledge",
	"aboutLi3"		: "Free consultancy and friendly services",
	"aboutP3"		: "Until now, ElektroPos still gives free services for non-profit clients and free consultancy for certain customers. This is a form of our support for MSMEs in particular and for Indonesia in general.",
	"aboutP4"		: "So don't hesitate to: ",
	"aboutA1"		: "Contact Us",
	"servicesH2"	: "Services",
	"servicesP1"	: "Magnam dolores commodi suscipit eius consequatur ex aliquid fug",
	"servicesH41"	: "Website",
	"servicesP1"	: "We help yout to build a beautiful and representative personal website.",
	"servicesH42"	: "Point of Sales",
	"servicesP2"	: "Our Point of Sales (POS) is cloud based. We help you to handle all technical things.",
	"servicesH43"	: "Mobile Application",
	"servicesP3"	: "All your business are in your hands, bundle in a clean and representative application.",
	"servicesH44"	: "Maintenance Website/POS/Application",
	"servicesP4"	: "We help you to ensure all your digital platform running and up-to-date.",
	"featuresH2"	: "Technology",
	"featuresP"		: "We use these technologies to support clients",
	"portfolioH2"	: "Portfolio",
	"portfolioP"	: "These are some of our portfolios",
	"portfolioL1"	: "All",
	"portfolioL4"	: "Web",
	"contactH2"		: "Contact Us",
	"submit"		: "Send Message"
	
};

var WORDS_ID = {
	"menuHome"		: "Beranda",
	"menuAbout"		: "Tentang",
	"menuServices"	: "Layanan",
	"menuPortfolio"	: "Portfolio",
	"menuContact"	: "Kontak",
	"heroH1" 		: "Tumbuh bersama kami",
	"heroH2" 		: "Kami membantu membawa bisnis anda ke dunia digital",
	"heroDiv1"		: "Layanan Kami",
	"aboutH2"		: "Tentang Kami",
	"aboutP1"		: "ElektroPos berdiri tahun 2018, berawal dari hobi di waktu senggang, dan terkadang membantu sanak saudara dalam proyek mereka.",
	"aboutP2" 		: "Setelah setahun, ElektroPos mulai memberikan layanan secara profesional, seperti:",
	"aboutLi1" 		: "Manajemen proyek dengan tenggat waktu yang ketat dan akurasi yang tinggi",
	"aboutLi2" 		: "Integritas dan pengetahuan terkini",
	"aboutLi3" 		: "Konsultasi gratis dan layanan ramah",
	"aboutP3" 		: "Hingga saat ini, ElektroPos masih memberikan layanan gratis untuk klien non profit dan konsultasi gratis untuk pelanggan tertentu. Ini sebagai bentuk dukungan kami terhadap UMKM pada khususnya dan Indonesia pada umumnya.",
	"aboutP4" 		: "Jadi jangan ragu untuk: ", 
	"aboutA1"		: "Kontak Kami",
	"servicesH2" 	: "Layanan",
	"servicesP1" 	: "Magnam dolores commodi suscipit eius consequatur ex aliquid fug",
	"servicesH41" 	: "Situs web",
	"servicesP1" 	: "Kami membantu Anda membangun website pribadi yang cantik dan representatif.",
	"servicesH42" 	: "Tempat Penjualan",
	"servicesP2" 	: "Point of Sales (POS) kami berbasis cloud. Kami membantu Anda menangani semua hal teknis.",
	"servicesH43" 	: "Aplikasi Seluler",
	"servicesP3" 	: "Semua bisnis Anda ada di tangan Anda, dibundel dalam aplikasi yang bersih dan representatif.",
	"servicesH44" 	: "Pemeliharaan Website/POS/Aplikasi",
	"servicesP4" 	: "Kami membantu Anda memastikan semua platform digital Anda berjalan dan mutakhir.",
	"featuresH2" 	: "Teknologi",
	"featuresP" 	: "Kami menggunakan teknologi ini untuk mendukung klien",
	"portfolioH2" 	: "Portofolio",
	"portfolioP" 	: "Ini adalah beberapa portofolio kami",
	"portfolioL1" 	: "Semua",
	"portfolioL4" 	: "Web",
	"contactH2" 	: "Hubungi Kami",
	"submit" 		: "Kirim Pesan"
	
};

window.onload = initialize;

function initialize() {
	var $dropdown = $("#country_select");    
		$.each(LanguageList, function(key, value) {
			$dropdown.
				append($("<option/>").
				val(key).
				text(value));
		});
	loadsLanguage("EN");
}

function loadsLanguage(lang){
	/*fills all the span tags with class=lang pattern*/ 
	$('span[class^="lang"]').each(function(){
		var LangVar = (this.className).replace('lang-','');
		var Text = window["WORDS_"+lang][LangVar];
		$(this).text(Text);        
	});
}