const customers = [
    { id: 1, name: "Ahmet", age: 32, city: "Ankara", orders: [100, 200, 150] },
    { id: 2, name: "Ayşe", age: 27, city: "İstanbul", orders: [300, 50] },
    { id: 3, name: "Mehmet", age: 40, city: "İzmir", orders: [500, 100, 200] },
    { id: 4, name: "Fatma", age: 35, city: "Ankara", orders: [300] },
    { id: 5, name: "Zeynep", age: 28, city: "Bursa", orders: [] }
];

console.log("Kolay Soru: İstanbul'da yaşayan müşterilerin isimlerini bir dizi olarak döndür.")

const istanbulCustomers = customers
    .filter(customer => customer.city === "İstanbul")
    .map(customer => customer.name);

console.log(istanbulCustomers);

// Çıktı: ["Ayşe"]

console.log("Orta Soru: Siparişleri toplamda 300 TL’den fazla olan ilk müşterinin adını döndür.")

const first300Spender = customers.find(customer => {
    const totalPayment = customer.orders.reduce((sum, order) => sum + order, 0);
    return totalPayment > 300;
}).name;

console.log(first300Spender);

// Çıktı: "Ahmet"

console.log("Zor Soru: Şehir bazında toplam sipariş miktarlarını döndür.")

console.log("-")


console.log("Çok Zor Soru: Her müşterinin toplam sipariş miktarını ve yaşını bir string olarak şu formatta döndür: Ahmet (32): 450 TL")

const customerSummaries = customers.map(customer => {
    const totalOrders = customer.orders.reduce((sum, order) => sum + order, 0);
    return `${customer.name} (${customer.age}): ${totalOrders} TL`;
  });
  
  console.log(customerSummaries);
  // Çıktı:
  // [
  //   "Ahmet (32): 450 TL",
  //   "Ayşe (27): 350 TL",
  //   "Mehmet (40): 800 TL",
  //   "Fatma (35): 300 TL",
  //   "Zeynep (28): 0 TL"
  // ]

  console.log("Çok Çok Zor Soru:  müşterilerin siparişlerini en yüksekten en düşüğe sıralayıp tek bir dizi olarak döndür.")

  console.log("-")