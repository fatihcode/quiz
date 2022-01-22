const quiz = [{
        question: "JavaScript kodu neler içerir?",
        choice: ["A", "B", "C", "D"],
        select: ["Yöntem (method) çağırmaları", "HTML etiketleri", "Çalıştırılabilir ifadeler", "Hepsi"],
        answer: "D"
    },
    {
        question: "Kullanıcı bir HTML öğesini tıkladığında aşağıdaki event (olaylardan) hangisi gerçekleşir?",
        choice: ["A", "B", "C", "D"],
        select: ["onclick", "onmouseclick", "onmouseover", "Hiçbiri"],
        answer: "A"
    },
    {
        question: "JavaScript'deki yorum satırları, ......... tarafından yok sayılır.",
        choice: ["A", "B", "C", "D"],
        select: ["bilgisayar", "işletim sistemi", "derleyici", "tarayıcı"],
        answer: "D"
    },
    {
        question: 'Bir ifade bloğu oluşturmak için birden fazla JS ifadesi ............ içine yazılır.',
        choice: ["A", "B", "C", "D", "E"],
        select: ['Köşeli parantezler "[ ]"', 'Yuvarlak parantezler "( )"', 'Süslü parantezler "{ }"', 'Hepsi', 'Hiçbiri'],
        answer: "C"
    },
    {
        question: 'Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir?',
        choice: ["A", "B", "C", "D"],
        select: ['String', 'Serileştirilmiş Nesne (Serialized Object)', 'Nesne (Object)', 'Hiçbiri'],
        answer: "C"
    },
    {
        question: 'JavaScript ifadeleri ............ tarafından sonlandırılır.',
        choice: ["A", "B", "C", "D", "E"],
        select: ['"/"', '"!"', '","', '";"', 'Hiçbiri'],
        answer: "D"
    },
    {
        question: '1996 yılında JavaScripti destekleyen ............ tarayıcısı yayınlanmıştır.',
        choice: ["A", "B", "C", "D"],
        select: ['Netscape Navigator 2.0', 'Internet Explorer 2.0', 'Netscape Navigator 1.0', 'Internet Explorer 1.0'],
        answer: "A"
    },
    {
        question: '"Id" attribute (özellik) değerine göre bir belge öğesi (document element) nasıl seçilir?',
        choice: ["A", "B", "C", "D", "E"],
        select: ['getId()', 'getElementsById()', 'get()', 'getElementById()', 'Hepsi'],
        answer: "C"
    },
    {
        question: 'JavaScript ifadeleri ............ grubu olarak adlandırılır.',
        choice: ["A", "B", "C", "D"],
        select: ['ifade bloğu (statement block)', 'kod bloğu', 'küme (cluster)', 'Hiçbiri'],
        answer: "A"
    },
    {
        question: 'Yorum ifadesi, ............ ifade türüdür.',
        choice: ["A", "B", "C", "D"],
        select: ['çalıştırılamayan', 'çalıştırılabilir', 'kullanışsız', 'önemli olmayan'],
        answer: "A"
    },
    {
        question: 'JavaScript ilk başlangıçta ............ adı altında geliştirilmiştir.',
        choice: ["A", "B", "C", "D", "E"],
        select: ['ActionScript', 'Sencha', 'Javia', 'Oak', 'Mocha'],
        answer: "E"
    },
    {
        question: 'SetTimeout() yöntemi ............ için kullanılır.',
        choice: ["A", "B", "C", "D"],
        select: ['yineleme zamanı', 'belirli bir süre sonra çağrılacak bir fonksiyon', 'belirli bir süre sonra bir olayın (event) çağırılması', 'olayın (event) uyutma moduna sokmak'],
        answer: "B"
    },
    {
        question: 'Microsoft, ............ isminde bir JavaScript lehçesi geliştirmiştir.',
        choice: ["A", "B", "C", "D"],
        select: ['MS JavaScript', 'MJavaScript', 'JScript', 'Advanced JavaScript'],
        answer: "C"
    },
    {
        question: 'JavaScripti ............ icat etmiştir.',
        choice: ["A", "B", "C", "D"],
        select: ['Brendan Eich', 'Thomas Java', 'James Gosling', 'Linus Helsinki'],
        answer: "A"
    },
    {
        question: 'Bir HTML sayfasına JavaScript eklemek için hangi etiket kullanılır ?',
        choice: ["A", "B", "C", "D"],
        select: ['&lt;script=’java’&gt;', '&lt;javascript&gt;', '&lt;script&gt;', '&lt;js&gt;'],
        answer: "C"
    },
    {
        question: 'Bir web sayfasında “Hello World” yazmak için aşağıdakilerden hangisi doğru kabul edilir?',
        choice: ["A", "B", "C", "D"],
        select: ['System.out.println(“Hello World”)', 'print(“Hello World”)', 'response.write(“Hello World”)', 'document.write(“Hello World”)'],
        answer: "D"
    },
    {
        question: 'Öğelerin görünmez olabilmesi için hangi özelliğin (attribute) kullanılması gerekir?',
        choice: ["A", "B", "C", "D"],
        select: ['visibilty', 'visible', 'invisibility', 'invisible'],
        answer: "A"
    },
    {
        question: 'Javascript nesne yönelimli (object oriented) bir programlama dilidir.',
        choice: ["A", "B"],
        select: ['Yanlış', 'Doğru'],
        answer: "B"
    },
    {
        question: 'Aşağıdakilerden hangisi geçerli bir JavaScript değişken adı değildir?',
        choice: ["A", "B", "C", "D"],
        select: ['_java_and_ java _names', '2java', 'javaandjava', 'Hiçbiri'],
        answer: "B"
    },
    {
        question: 'Aşağıdaki yöntemlerden hangisinde bir tarih oluştururken hata alınır?',
        choice: ["A", "B", "C", "D"],
        select: ['new Date(dateString)', 'new Date()', 'new Date(seconds)', 'new Date(year, month, day, hours, minutes, seconds, milliseconds)'],
        answer: "C"
    },
    {
        question: 'Aşağıdakilerden hangisi JavaScript kullanarak bir uyarı kutusu görüntülemek için doğru sözdizimidir?',
        choice: ["A", "B", "C", "D"],
        select: ['alertbox(“Hello World”);', 'msg(“Hello World”);', 'msgbox(“Hello World”);', 'alert(“Hello World”);'],
        answer: "D"
    },
    {
        question: 'Java ve JavaScript neden benzer ada sahiptir?',
        choice: ["A", "B", "C", "D"],
        select: ['Javascript, Javanın soyulmuş(stripped down) bir sürümüdür.', 'JavaScript sözdizimi(syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.', 'İkisi de Nesneye Yönelik Programlamayı destekler.', 'Hiçbiri '],
        answer: "B"
    },
    {
        question: 'Javascriptin alternatif adı nedir?',
        choice: ["A", "B", "C", "D"],
        select: ['LimeScript', 'ECMScript', 'JXXScript', 'ECMAScript'],
        answer: "D"
    },
    {
        question: 'JavaScript fazladan boşlukları yok sayar.',
        choice: ["A", "B"],
        select: ['Doğru', 'Yanlış'],
        answer: "A"
    },
    {
        question: 'Javascript tüm boolean operatörlerini destekler.',
        choice: ["A", "B"],
        select: ['Doğru', 'Yanlış'],
        answer: "B"
    },
]


export default quiz;