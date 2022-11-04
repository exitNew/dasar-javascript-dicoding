// 1. create abstraction
const canSendMessage = self => ({
	sendMessage: () => console.log('send message', self.message)
});

const checkIsValidPhone = self => ({
	isValid: () => console.log('valid phone', self.from)
});

// 2. create object composition
const personalEnterprise = (from, message, store) => {
	// 3. Attribute
	const self = {
		from, message, store
	}

	// 4. method 
	const personalEnterpriseBehaviour = self => ({
		createCatalog: () => console.log("catalog has been created: ", self.store)
	});

	// 5. create object composition
	return Object.assign(self, personalEnterpriseBehaviour(self), canSendMessage(self), checkIsValidPhone(self));
}	

const pel1 = personalEnterprise('pengirim email', 'hei produk baru nih', 'Dicoding Store');
pel1.createCatalog()
pel1.sendMessage()
pel1.personalEnterpriseBehaviour()
