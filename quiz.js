const quiz = [{
        question: "JavaScript kodu neler içerir?",
        choice: ["Yöntem (method) çağırmaları", "HTML etiketleri", "Çalıştırılabilir ifadeler", "Hepsi"],
        answer: "Hepsi"
    },
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
    // {
    //     question: 'Bir ifade bloğu oluşturmak için birden fazla JS ifadesi ............ içine yazılır.',
    //     choice: ['Köşeli parantezler "[ ]"', 'Yuvarlak parantezler "( )"', 'Süslü parantezler "{ }"', 'Hepsi', 'Hiçbiri'],
    //     answer: 'Süslü parantezler "{ }"'
    // },
    // {
    //     question: '............ operatörü bir değişkene bir değeri atamak için kullanılır.',
    //     choice: ['+', '*', '**', '=', 'Hiçbiri'],
    //     answer: '='
    // },
    // {
    //     question: 'Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir?',
    //     choice: ['String', 'Serileştirilmiş Nesne (Serialized Object)', 'Nesne (Object)', 'Hiçbiri'],
    //     answer: 'Nesne (Object)'
    // },
    // {
    //     question: 'JavaScript ifadeleri ............ tarafından sonlandırılır.',
    //     choice: ['"/"', '"!"', '","', '";"', 'Hiçbiri'],
    //     answer: '";"'
    // },
    // {
    //     question: '1996 yılında JavaScripti destekleyen ............ tarayıcısı yayınlanmıştır.',
    //     choice: ['Netscape Navigator 2.0', 'Internet Explorer 2.0', 'Netscape Navigator 1.0', 'Internet Explorer 1.0'],
    //     answer: 'Netscape Navigator 2.0'
    // },
    // {
    //     question: '"Id" attribute (özellik) değerine göre bir belge öğesi (document element) nasıl seçilir?',
    //     choice: ['getId()', 'getElementsById()', 'get()', 'getElementById()', 'Hepsi'],
    //     answer: 'getElementById()'
    // },
    // {
    //     question: 'JavaScript ifadeleri ............ grubu olarak adlandırılır.',
    //     choice: ['ifade bloğu (statement block)', 'kod bloğu', 'küme (cluster)', 'Hiçbiri'],
    //     answer: 'ifade bloğu (statement block)'
    // },
    // {
    //     question: 'Yorum ifadesi, ............ ifade türüdür.',
    //     choice: ['çalıştırılamayan', 'çalıştırılabilir', 'kullanışsız', 'önemli olmayan'],
    //     answer: 'çalıştırılamayan'
    // },
    // {
    //     question: 'JavaScript ilk başlangıçta ............ adı altında geliştirilmiştir.',
    //     choice: ['ActionScript', 'Sencha', 'Javia', 'Oak', 'Mocha'],
    //     answer: 'Mocha'
    // },
    // {
    //     question: 'Tek satır yorum yapmak için ............ sembolü kullanılır.',
    //     choice: ['"$$"', '"#"', '"//"', '""', '"<<"'],
    //     answer: '"//"'
    // },
    // {
    //     question: 'SetTimeout() yöntemi ............ için kullanılır.',
    //     choice: ['yineleme zamanı', 'belirli bir süre sonra çağrılacak bir fonksiyon', 'belirli bir süre sonra bir olayın (event) çağırılması', 'olayın (event) uyutma moduna sokmak'],
    //     answer: 'belirli bir süre sonra çağrılacak bir fonksiyon'
    // },
    // {
    //     question: 'Microsoft, ............ isminde bir JavaScript lehçesi geliştirmiştir.',
    //     choice: ['MS JavaScript', 'MJavaScript', 'JScript', 'Advanced JavaScript'],
    //     answer: 'JScript'
    // },
    // {
    //     question: 'JavaScripti ............ icat etmiştir.',
    //     choice: ['Brendan Eich', 'Thomas Java', 'James Gosling', 'Linus Helsinki'],
    //     answer: 'Brendan Eich'
    // },
    // {
    //     question: 'Bir HTML sayfasına JavaScript eklemek için hangi etiket kullanılır ?',
    //     choice: ['&lt;script=’java’&gt;', '&lt;javascript&gt;', '&lt;script&gt;', '&lt;js&gt;'],
    //     answer: '&lt;script&gt;'
    // },
    // {
    //     question: 'Bir web sayfasında “Hello World” yazmak için aşağıdakilerden hangisi doğru kabul edilir?',
    //     choice: ['System.out.println(“Hello World”)', 'print(“Hello World”)', 'response.write(“Hello World”)', 'document.write(“Hello World”)'],
    //     answer: 'document.write(“Hello World”)'
    // },
    // {
    //     question: 'Öğelerin görünmez olabilmesi için hangi özelliğin (attribute) kullanılması gerekir?',
    //     choice: ['visibilty', 'visible', 'invisibility', 'invisible'],
    //     answer: 'visibilty'
    // },
    // {
    //     question: 'Javascript nesne yönelimli (object oriented) bir programlama dilidir.',
    //     choice: ['Yanlış', 'Doğru'],
    //     answer: 'Doğru'
    // },
    // {
    //     question: 'Aşağıdakilerden hangisi geçerli bir JavaScript değişken adı değildir?',
    //     choice: ['_java_and_ java _names', '2java', 'javaandjava', 'Hiçbiri'],
    //     answer: '2java'
    // },
    // {
    //     question: 'Aşağıdaki yöntemlerden hangisinde bir tarih oluştururken hata alınır?',
    //     choice: ['new Date(dateString)', 'new Date()', 'new Date(seconds)', 'new Date(year, month, day, hours, minutes, seconds, milliseconds)'],
    //     answer: 'new Date(seconds)'
    // },
    // {
    //     question: 'Aşağıdakilerden hangisi JavaScript kullanarak bir uyarı kutusu görüntülemek için doğru sözdizimidir?',
    //     choice: ['alertbox(“Hello World”);', 'msg(“Hello World”);', 'msgbox(“Hello World”);', 'alert(“Hello World”);'],
    //     answer: 'alert(“Hello World”);'
    // },
    // {
    //     question: 'Java ve JavaScript neden benzer ada sahiptir?',
    //     choice: ['Javascript, Javanın soyulmuş(stripped down) bir sürümüdür.', 'JavaScript sözdizimi(syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.', 'İkisi de Nesneye Yönelik Programlamayı destekler.', 'Hiçbiri '],
    //     answer: 'JavaScript sözdizimi(syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.'
    // },
    // {
    //     question: 'Javascriptin alternatif adı nedir?',
    //     choice: ['LimeScript', 'ECMScript', 'JXXScript', 'ECMAScript'],
    //     answer: 'ECMAScript'
    // },
    // {
    //     question: 'JavaScript fazladan boşlukları yok sayar.',
    //     choice: ['Doğru', 'Yanlış'],
    //     answer: 'Doğru'
    // },
    // {
    //     question: 'Javascript tüm boolean operatörlerini destekler.',
    //     choice: ['Doğru', 'Yanlış'],
    //     answer: 'Yanlış'
    // },
]


export default quiz;