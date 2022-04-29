window.onload=function(language){
   // get canvas by id canvas
   var c = document.getElementById("canvas");
   var ctx = c.getContext("2d");

   // making the canvas full screen
   c.height = window.innerHeight;
   c.width = window.innerWidth;

   // color pattern for matrix
   var r = "7f0";
   var g = "f80";
   var b = "f09";
        
// language variables 
var english = ("qwertuyiopasdfghjklzxcvbnm1234567890@%!#$@&}");

var hindi = ("अआइईउऊएऐओऔअंअःऋऑकखगघड़छजझञटठडणपबमलहस");

var emoji = ("☺");

var chinese = ("悪ぇちhv除夜堊餌徒鵜ヴェール悪ぇちhv除夜餌徒鵜ヴェール都ばあい藻ぁはない緒亜8吾唖娃ああアねぇ場合");

var malayalam = ("അആഇഈഉഊഋഎഏഐഒഓഔഅംകഖഗഘങചഛജഝഞടഠഡണഢമഭബഫപനധദതഥയരവവലശഷസഹ");

var telgu = ("అఆఇఈఉఊఋఎఏఐఒఓఔఅంతకఖగఘఙఙచఛజఝఞపడటఠఢణపఫబమతథదధనమయరలవశషసహమ");

var tamil = ("அஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவளழறனஜஷஸஹக்ஷஸ்ரீஃ");

var georgian = ("ქწერტყიუოპასდფგჰჯკლზხცვბნმთღჭშძჩჟ");


var arabic = ("ضصثقفغعهخحجشسيبلاتنمكطذءءؤرىةوزظد؟١٢٣٤٥٦٧٨٩");

var thai = ("ๆไำพะรนยบลฟหกดเาสวงฤผปแอิทมใฝฌฑ๑๒๓๔๕๗๘๙๑ๅฃภถคตจขช");

var korean = ("ㅓ너턐앶0자ㅜ우텿ㅅ뇻볍0자구루챠쳩ㅌㅅㅍㅈ쥬더어여토유우댖9ㅈ0자크탸텻ㅌ류뉶뵵뱌버무이쳈ㅂㄱ버ㅏ응");

var russian = ("СЪЕШЬЭТИХМЯГКИХФРАНЦУЗКИХБУЛОКДАВЫПЕЙЧАЮ@1234567890#$%&");

var amharic = ("ድርሰቶችመደበኛ ትምህርት ዋና ክፍል ሆነዋል. የሁለተኛ ደረጃ ተማሪዎች የመግቢያ ድርሰቶች አብዛኛውን ጊዜ አመልካቾች በመምረጥ ረገድ ዩኒቨርሲቲዎች የሚጠቀሙባቸው ናቸው ያላቸውን የመጻፍ ክህሎት ለማሻሻል የተዋቀረ ድርሰት ቅርጸቶች የተማሩ ናቸው እና ሂውማኒቲስ እና ማህበራዊ ሳይንስ ድርሰቶች ናቸው");

var armenian = ("ռեֆերատները դարձել է մի մեծ մասը ֆորմալ կրթության. Միջնակարգ ուսանողները ուսուցանվում են համակարգված շարադրությունների ձեւաչափեր են բարելավել իրենց գրելու հմտությունները ընդունելության ռեֆերատները հաճախ");

var bengali = ("প্রবন্ধ প্রাতিষ্ঠানিক শিক্ষা একটি প্রধান অংশ হয়ে উঠেছে। মাধ্যমিক শিক্ষার্থীদের তাদের লেখার দক্ষতা ভর্তি রচনাগুলিকে প্রায়ই আবেদনকারীদের নির্বাচন মধ্যে ");

var greek= ("μορφές δοκίμιο για να βελτιώσουν τις δεξιότητές τους γραπτώς τα δοκίμια αποδοχής που χρησιμοποιούνται συχνά από πανεπιστήμια της επιλογής των υποψηφίων και των ανθρωπιστικών και κοινωνικών επιστημών δοκίμια είναι");

var gujrati = ("બંધો ઔપચારિક શિક્ષણ એક મોટો ભાગ બની ગયા છે. માધ્યમિક વિદ્યાર્થીઓને તેમના લેખન કૌશલ્ય પ્રવેશ નિબંધો ઘણી વખત અરજદારો પસંદ યુનિવર્સિટીઓ દ્વારા ઉપયોગ કરવામાં આવે સુધારવા માટે માળખાગત નિબંધ ફોર્મેટ શીખવવામાં આવે અને તેમાં માનવજાતિ અને સામાજિક વિજ્ઞાનમાં નિબંધો છે");

var hebrew = ("המאמרים הפכו לחלק מרכזי בחינוך הפורמלי. תלמידי תיכון נלמדים בפורמטים מסודרים מובנים כדי לשפר את כישורי הכתיבה שלהם במסמכי הקבלה משמשים לעתים קרובות על ידי האוניברסיטאות בבחירת המועמדים והמדעי הרוח והמדעים החברתיים הם");

var japanese = ("エッセイは正式な教育の大部分を占めています。中等教育の学生は筆記能力を向上させるために構造化されたエッセイ形式を教えられます入学時には大学が出願人を選ぶ際に頻繁に使用されるエッセイ人文科学や社会科学のエッセイは");

var khmer = ("ការសរសេរតែងសេចក្តីបានក្លាយជាផ្នែកសំខាន់មួយនៃការអប់រំជាផ្លូវការ។សិស្សអនុវិទ្យាល័យត្រូវបានបង្រៀនទ្រង់ទ្រាយអត្ថបទដែលមានរចនាសម្ព័ន្ធដើម្បីបង្កើនជំនាញក្នុងការសរសេររបស់ខ្លួនជា");


var lao = ("ການສຶກສາຢ່າງເປັນທາງການນັກສຶກສາມັດທະຍົມໄດ້ຖືກສອນຮູບແບບຄງສ້າງໃນການປັບປຸງຄວາມສາມາດຂອງລາຍລັກອັກສອນຂອງເຂົາເຈົ້າຄ່າຜ່ານປະຕູໄດ້ຖືກນໍາໃຊ້ໂດຍວິທະຍາໄລໃນການເລືອກຜູ້ສະຫມັກແລະຂອງມະນຸດແລະບົດ");

var burmese = ("ဖြစ်လာကြပါပြီ။အလယ်တန်းကျောင်းသားများအတွက်ဝန်ခံချက်အက်ဆေးမကြာခဏလျှောက်ထားရွေးချယ်ခြင်းအတွက်တက္ကသိုလ်တွေကအသုံးပြုနေကြသည်သူတို့၏အရေးအသားကျွမ်းကျင်မှု");

var punjabi = ("ਹਨਸੈਕੰਡਰੀਵਿਦਿਆਰਥੀਆਪਣੇਲਿਖਣਦੇਹੁਨਰਨੂੰਦਾਖਲਾ ਲੇਖਅਕਸਰਬਿਨੈਕਾਰਦੀਚੋਣਵਿਚਯੂਨੀਵਰਸਿਟੀਦੁਆਰਾਅਤਸਮਾਜਿਕਵਿਗਿਆਨਲੇਖਹ");

var numbers = ("0123456789");

var binary = ("01");

var super_crazy =  
english 
+hindi
+russian
+chinese
+georgian
+korean
+thai
+arabic
+tamil;

var languages = [
 english, 
 hindi,
 russian, 
 chinese, 
 georgian, 
 binary,
 numbers, 
 korean, 
 thai,
 arabic, 
 malayalam,
 tamil, 
 telgu,
 emoji, 
 super_crazy, 
 amharic, 
 armenian, 
 bengali, 
 greek, 
 gujrati, 
 hebrew, 
 japanese, 
 khmer,
 lao,
 burmese,
 punjabi ];        
        
var rand = Math.floor(Math.random()*languages.length);      
        
// language selector
var matrix = languages[rand];
// var matrix = super_crazy;
               
        
/*
// welcome alert 
if ( matrix == english ) { alert ("Welcome to the ULTIMATE ENGLISH MATRIX") }
else if ( matrix == hindi   ){ alert ("Welcome to the ULTIMATE HINDI MATRIX") }
else if ( matrix == telgu   ){ alert ("Welcome to the ULTIMATE TELGU MATRIX") }
else if ( matrix == russian ){ alert ("Welcome to the ULTIMATE RUSSIAN MATRIX") }
else if ( matrix == thai    ){ alert ("Welcome to the ULTIMATE THAI MATRIX") }
else if ( matrix == korean  ){ alert ("Welcome to the ULTIMATE KOREAN MATRIX") }
else if ( matrix == emoji   ){ alert ("Welcome to the ULTIMATE EMOJI MATRIX") }
else if ( matrix == malayalam){ alert ("Welcome to the ULTIMATE MALAYALAM MATRIX")}
else if ( matrix == arabic  ){ alert ("Welcome to the ULTIMATE ARABIC MATRIX") }
else if ( matrix == chinese ){ alert ("Welcome to the ULTIMATE CHINESE MATRIX") }
else if ( matrix == tamil   ){ alert ("Welcome to the ULTIMATE TAMIL MATRIX") }
else if ( matrix == georgian){ alert ("Welcome to the ULTIMATE GEORGIAN MATRIX") }
else if ( matrix == binary  ){ alert ("Welcome to the ULTIMATE BINARY MATRIX") }
else if ( matrix == numbers ){ alert ("Welcome to the ULTIMATE NUMBER MATRIX") }
else if ( matrix == amharic ){ alert ("Welcome to the ULTIMATE AMHARIC MATRIX") }
else if ( matrix == armenian  ){ alert ("Welcome to the ULTIMATE ARMENIAN MATRIX") }
else if ( matrix == bengali  ){ alert ("Welcome to the ULTIMATE BENGALI MATRIX") }
else if ( matrix == greek  ){ alert ("Welcome to the ULTIMATE GREEK MATRIX") }
else if ( matrix == gujrati  ){ alert ("Welcome to the ULTIMATE GUJRATI MATRIX") }
else if ( matrix == hebrew  ){ alert ("Welcome to the ULTIMATE HEBREW MATRIX") }
else if ( matrix == japanese  ){ alert ("Welcome to the ULTIMATE JAPANESE MATRIX") }
else if ( matrix == khmer  ){ alert ("Welcome to the ULTIMATE KHMER MATRIX") }
else if ( matrix == lao  ){ alert ("Welcome to the ULTIMATE LAO MATRIX") }
else if ( matrix == punjabi  ){ alert ("Welcome to the ULTIMATE PUNJABI MATRIX") }
else if ( matrix == burmese  ){ alert ("Welcome to the ULTIMATE BURMESE MATRIX") }
else if (matrix == super_crazy){ alert ("!!!WARNING!!!\nYou have entered the UNAUTHORISED\n SUPER CRAZY MATRIX")
alert ( "SUPER CRAZY MATRIX is the crazy combination of \nALL LANGUAGES\n\nreally crazy alright!?")}
 */
        
//converting the string into an array of single characters
matrix = matrix.split("");
r = r.split("");
g = g.split("");
b = b.split("");

var font_size = 10;
//number of columns for the rain
var columns = c.width/font_size; 
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
  drops[x] = 1; 

//drawing the characters
function draw() {
   //a random color to print
   var coltext = "#00ff00"/* + r[Math.floor(Math.random()*r.length)] + g[Math.floor(Math.random()*g.length)] + b[Math.floor(Math.random()*b.length)]*/;
            
   //Black BG for the canvas
   //translucent BG to show trail
   ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
   ctx.fillRect(0, 0, c.width, c.height);
   //color text
   ctx.fillStyle = coltext; 
   ctx.font = font_size + "px arial";
   //looping over drops
   for(var i = 0; i < drops.length; i++) {
      //a random chinese character to print
      var text = matrix[Math.floor(Math.random()*matrix.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.945)
         drops[i] = 0;
       //incrementing Y coordinate 
       drops[i]++;
   }
}

setInterval(draw, 35);
};