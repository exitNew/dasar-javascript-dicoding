class Mail {
	constructor(author) {
		this.from = author;
		this._contacts = [];
	}

	sendMessage(msg, to) {
		console.log(`you send: ${msg} to ${to} from ${this.from}`);
		this._contacts.push(to);
	}

	showAllContacts() {
		return this._contacts;
	}
}

class Whatsapp extends Mail {
	constructor(username, isBusinessAccount, phoneNumber) {
		super(phoneNumber);
		this.username = username;
		this.isBusinessAccount = isBusinessAccount;
	}
	
	// overriding
	sendMessage(msg, to) {
		super.sendMessage(msg, to);
		console.log("send by WA");
	}
}

const wa1 = new Whatsapp('dicoding', true, '62888088080')

console.log(wa1.from);
wa1.sendMessage("oit", "@dicoding.com");
