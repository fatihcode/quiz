const quiz = [{
        question: "JavaScript kodu neler içerir?",
        choice: ["Yöntem (method) çağırmaları", "HTML etiketleri", "Çalıştırılabilir ifadeler", "Hepsi"],
        answer: "Hepsi"
    },
    // {
    //     question: 'JavaScriptte özel karakterler eklemek için aşağıdakilerden hangisi kullanılır ?',
    //     choice: ['%', '-', '\\', ' &amp; '],
    //     answer: '\\'
    // },
    {
        question: "Kullanıcı bir HTML öğesini tıkladığında aşağıdaki event (olaylardan) hangisi gerçekleşir?",
        choice: ["onclick", "onmouseclick", "onmouseover", "Hiçbiri"],
        answer: "onclick"
    },
    {
        question: "JavaScript'deki yorum satırları, ......... tarafından yok sayılır.",
        choice: ["bilgisayar", "işletim sistemi", "derleyici", "tarayıcı"],
        answer: "tarayıcı"
    },
    {
        question: 'Bir ifade bloğu oluşturmak için birden fazla JS ifadesi ............ içine yazılır.',
        choice: ['Köşeli parantezler "[ ]"', 'Yuvarlak parantezler "( )"', 'Süslü parantezler "{ }"', 'Hepsi', 'Hiçbiri'],
        answer: 'Süslü parantezler "{ }"'
    },
    {
        question: '............ operatörü bir değişkene bir değeri atamak için kullanılır.',
        choice: ['+', '*', '**', '=', 'Hiçbiri'],
        answer: '='
    },
    // {
    //     question: 'Aşağıdakilerden hangisi "while" döngüsünün doğru ifadesidir?',
    //     choice: ['while i = 1 to 10', 'while (i <= 10; i++)', 'while (i <= 10)', 'while i =< 1 to 10', 'Hepsi olabilir'],
    //     answer: 'while (i <= 10)'
    // },
    {
        question: 'Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir?',
        choice: ['String', 'Serileştirilmiş Nesne (Serialized Object)', 'Nesne (Object)', 'Hiçbiri'],
        answer: 'Nesne (Object)'
    },
    {
        question: 'JavaScript ifadeleri ............ tarafından sonlandırılır.',
        choice: ['"/"', '"!"', '","', '";"', 'Hiçbiri'],
        answer: '";"'
    },
    {
        question: '1996 yılında JavaScripti destekleyen ............ tarayıcısı yayınlanmıştır.',
        choice: ['Netscape Navigator 2.0', 'Internet Explorer 2.0', 'Netscape Navigator 1.0', 'Internet Explorer 1.0'],
        answer: 'Netscape Navigator 2.0'
    },
    {
        question: '"Id" attribute (özellik) değerine göre bir belge öğesi (document element) nasıl seçilir?',
        choice: ['getId()', 'getElementsById()', 'get()', 'getElementById()', 'Hepsi'],
        answer: 'getElementById()'
    },
    // {
    //     question: 'Pencerede (window) görüntülenen içeriği temsil eden özellik hangisidir?',
    //     choice: ['window', 'frame', 'document', 'content', 'Hiçbiri'],
    //     answer: 'document'
    // },
    {
        question: 'JavaScript ifadeleri ............ grubu olarak adlandırılır.',
        choice: ['ifade bloğu (statement block)', 'kod bloğu', 'küme (cluster)', 'Hiçbiri'],
        answer: 'ifade bloğu (statement block)'
    },
    {
        question: 'Yorum ifadesi, ............ ifade türüdür.',
        choice: ['çalıştırılamayan', 'çalıştırılabilir', 'kullanışsız', 'önemli olmayan'],
        answer: 'çalıştırılamayan'
    },
    {
        question: 'JavaScript ilk başlangıçta ............ adı altında geliştirilmiştir.',
        choice: ['ActionScript', 'Sencha', 'Javia', 'Oak', 'Mocha'],
        answer: 'Mocha'
    },
    {
        question: 'Tek satır yorum yapmak için ............ sembolü kullanılır.',
        choice: ['"$$"', '"#"', '"//"', '""', '"<<"'],
        answer: '"//"'
    },
    {
        question: 'SetTimeout() yöntemi ............ için kullanılır.',
        choice: ['yineleme zamanı', 'belirli bir süre sonra çağrılacak bir fonksiyon', 'belirli bir süre sonra bir olayın (event) çağırılması', 'olayın (event) uyutma moduna sokmak'],
        answer: 'belirli bir süre sonra çağrılacak bir fonksiyon'
    },
    {
        question: 'Microsoft, ............ isminde bir JavaScript lehçesi geliştirmiştir.',
        choice: ['MS JavaScript', 'MJavaScript', 'JScript', 'Advanced JavaScript'],
        answer: 'JScript'
    },
    {
        question: 'JavaScripti ............ icat etmiştir.',
        choice: ['Brendan Eich', 'Thomas Java', 'James Gosling', 'Linus Helsinki'],
        answer: 'Brendan Eich'
    },
    {
        question: 'Bir HTML sayfasına JavaScript eklemek için hangi etiket kullanılır ?',
        choice: ['&lt;script=’java’&gt;', '&lt;javascript&gt;', '&lt;script&gt;', '&lt;js&gt;'],
        answer: '&lt;script&gt;'
    },
    // {
    //     question: 'JavaScript, formun içeriğini sunucudaki bir veritabanı dosyasına depolamak için kullanılabilir.',
    //     choice: ['Yanlış', 'Doğru'],
    //     answer: 'Yanlış'
    // },
    // {
    //     question: 'Aşağıdakilerden hangisi sunucu tarafı (server-side) Javascript nesnesidir?',
    //     choice: ['Function', 'File', 'FileUpload', 'Date'],
    //     answer: 'File'
    // },
    // {
    //     question: 'Javascript C programlama dillerindeki blok düzeyinde kapsam belirleme (c style block level scoping) desteklemez.',
    //     choice: ['Yanlış', 'Doğru'],
    //     answer: 'Doğru'
    // },
    {
        question: 'Bir web sayfasında “Hello World” yazmak için aşağıdakilerden hangisi doğru kabul edilir?',
        choice: ['System.out.println(“Hello World”)', 'print(“Hello World”)', 'response.write(“Hello World”)', 'document.write(“Hello World”)'],
        answer: 'document.write(“Hello World”)'
    },
    // {
    //     question: 'Java Scriptte bir "window" nesnesinin hangi özelliğine atanan metin durum çubuğunda(status bar) gözükür?',
    //     choice: ['Pathname', 'Protocol', 'Host', 'defaultStatus'],
    //     answer: 'defaultStatus '
    // },
    {
        question: 'Öğelerin görünmez olabilmesi için hangi özelliğin (attribute) kullanılması gerekir?',
        choice: ['visibilty', 'visible', 'invisibility', 'invisible'],
        answer: 'visibilty'
    },
    // {
    //     question: 'Bir penceredeki tüm tıklama etkinliklerini (click events) yakalamak için aşağıdakilerden hangisi kullanılır?',
    //     choice: ['window.routeEvents(Event.CLICK );', 'window.handleEvents (Event.CLICK);', 'window.captureEvents(Event.CLICK);', 'window.raiseEvents(Event.CLICK );'],
    //     answer: 'window.captureEvents(Event.CLICK);'
    // },
    {
        question: 'Javascript nesne yönelimli (object oriented) bir programlama dilidir.',
        choice: ['Yanlış', 'Doğru'],
        answer: 'Doğru'
    },
    {
        question: 'Aşağıdakilerden hangisi geçerli bir JavaScript değişken adı değildir?',
        choice: ['_java_and_ java _names', '2java', 'javaandjava', 'Hiçbiri'],
        answer: '2java'
    },
    {
        question: 'Aşağıdaki yöntemlerden hangisinde bir tarih oluştururken hata alınır?',
        choice: ['new Date(dateString)', 'new Date()', 'new Date(seconds)', 'new Date(year, month, day, hours, minutes, seconds, milliseconds)'],
        answer: 'new Date(seconds)'
    },
    // {
    //     question: 'Javascriptte negatif sonsuz kavramı nasıl kullanılır?',
    //     choice: ['var.NEGATIVE_INFINITY ', 'Number.NEGATIVE_INFINITY ', 'Number.Negative_Infinity ', 'Hiçbiri ', ''],
    //     answer: 'Number.NEGATIVE_INFINITY '
    // },
    {
        question: 'Aşağıdakilerden hangisi JavaScript kullanarak bir uyarı kutusu görüntülemek için doğru sözdizimidir?',
        choice: ['alertbox(“Hello World”);', 'msg(“Hello World”);', 'msgbox(“Hello World”);', 'alert(“Hello World”);'],
        answer: 'alert(“Hello World”);'
    },
    {
        question: 'Java ve JavaScript neden benzer ada sahiptir?',
        choice: ['Javascript, Javanın soyulmuş(stripped down) bir sürümüdür.', 'JavaScript sözdizimi(syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.', 'İkisi de Nesneye Yönelik Programlamayı destekler.', 'Hiçbiri '],
        answer: 'JavaScript sözdizimi(syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.'
    },
    // {
    //     question: 'Dosya bir sunucu tarafı (server-side) JavaScript nesnesidir?',
    //     choice: ['Doğru', 'Yanlış'],
    //     answer: 'Doğru'
    // },
    {
        question: 'Javascriptin alternatif adı nedir?',
        choice: ['LimeScript', 'ECMScript', 'JXXScript', 'ECMAScript'],
        answer: 'ECMAScript'
    },
    // {
    //     question: 'Aşağıdakilerden hangisi istemci tarafı (client side) Javascript nesnesidir?',
    //     choice: ['Function', 'FileUpload', 'Time', 'File'],
    //     answer: 'FileUpload'
    // },
    // {
    //     question: 'Javaya bir JavaScript nesnesi gönderildiğinde hangi java sarmalayıcı(wrapper) türü oluşturulur?',
    //     choice: ['ScriptObject', 'JavaObject', 'Jobject', 'JSObject'],
    //     answer: 'JSObject '
    // },

    // {
    //     question: 'Javascriptte bir değişkenin türü boyunca bildirilmesi mümkün müdür?',
    //     choice: ['Evet', 'Hayır'],
    //     answer: 'Evet'
    // },
    {
        question: 'JavaScript fazladan boşlukları yok sayar.',
        choice: ['Doğru', 'Yanlış'],
        answer: 'Doğru'
    },
    // {
    //     question: 'Aldığı karakter dizisi parametresini, dinamik olarak JavaScript kaynak kodlarına çevirerek çalıştırılmasını sağlayan metod aşağıdakilerden hangisidir?',
    //     choice: ['Eval', 'ParseObject', 'ParseDoule', 'Efloat'],
    //     answer: 'Eval'
    // },
    {
        question: 'Javascript tüm boolean operatörlerini destekler.',
        choice: ['Doğru', 'Yanlış'],
        answer: 'Yanlış'
    },
    // {
    //     question: 'Javascript varlıkları (entity) ............ ile başlar ve ............ ile biter.',
    //     choice: ['noktalı virgül, &', 'noktalı virgül, nokta', '&, noktalı virgül', '&, nokta'],
    //     answer: '& , noktalı virgül'
    // },
    // {
    //     question: 'Bir Javascript dizisine değer nasıl eklenir?',
    //     choice: ['arr[arr.length*1] = value', 'arr[arr.length-1] = value', 'arr[arr.length+1] = new Arrays()', 'arr[arr.length] = value'],
    //     answer: 'arr[arr.length] = value'
    // }
]


export default quiz;