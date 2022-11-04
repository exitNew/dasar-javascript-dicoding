// can be accessed in public

class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
    }
    sendMessage(msg, to, from) {
        console.log(`you send: ${msg} to ${to} from ${from}`);
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

console.log(mail1.contacts);

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

// cannot accessed in public alias private
// cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)

function Mail2(){
	this.from = 'penerima@dicoding.com';
	var contacts = [];
}

const mail2 = new Mail2();

console.log(mail2.contacts);

// cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`

class Mail3 {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}

const mail3 = new Mail3();

console.log(mail3.contacts);

// cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 

class Mail4 {
    #contacts = [];
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}

const mail4 = new Mail4();

console.log(mail4.contacts);
