// statesAndDistricts.js
const indianStates = [
    { name: "Andhra Pradesh", districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Sri Potti Sriramulu Nellore", "West Godavari"] },
    { name: "Arunachal Pradesh", districts: ["Itanagar", "Papum Pare", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Tawang", "Changlang"] },
    { name: "Assam", districts: ["Dibrugarh", "Guwahati", "Jorhat", "Karimganj", "Nagaon", "Tinsukia", "Sonitpur", "Barpeta"] },
    { name: "Bihar", districts: ["Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Buxar", "Gaya", "Jehanabad", "Nalanda", "Patna", "Rohtas"] },
    { name: "Chhattisgarh", districts: ["Bilaspur", "Dantewada", "Dhamtari", "Korba", "Raigarh", "Rajnandgaon", "Surguja"] },
    { name: "Goa", districts: ["North Goa", "South Goa"] },
    { name: "Gujarat", districts: ["Ahmedabad", "Anand", "Gandhinagar", "Kutch", "Rajkot", "Surat", "Vadodara"] },
    { name: "Haryana", districts: ["Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar", "Jhajjar", "Kaithal", "Karnal"] },
    { name: "Himachal Pradesh", districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Lahaul and Spiti", "Mandi", "Shimla", "Solan", "Una"] },
    { name: "Jharkhand", districts: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"] },
    { name: "Karnataka", districts: ["Bangalore", "Belgaum", "Bellary", "Davanagere", "Dharwad", "Hassan", "Mysore"] },
    { name: "Kerala", districts: ["Alappuzha", "Ernakulam", "Idukki", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"] },
    { name: "Madhya Pradesh", districts: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"] },
    { name: "Maharashtra", districts: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Kolhapur"] },
    { name: "Manipur", districts: ["Imphal East", "Imphal West", "Bishnupur", "Chandel", "Churachandpur", "Senapati", "Tamenglong"] },
    { name: "Meghalaya", districts: ["East Garo Hills", "East Khasi Hills", "West Garo Hills", "West Khasi Hills", "Jaintia Hills"] },
    { name: "Mizoram", districts: ["Aizawl", "Champhai", "Kolasib", "Lunglei", "Mamit", "Saiha", "Serchhip"] },
    { name: "Nagaland", districts: ["Dimapur", "Kiphire", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"] },
    { name: "Odisha", districts: ["Angul", "Bargarh", "Boudh", "Cuttack", "Dhenkanal", "Ganjam", "Kandhamal", "Khurda", "Nabarangpur", "Nayagarh", "Rayagada", "Sambalpur", "Sonepur", "Jagatsinghpur"] },
    { name: "Punjab", districts: ["Amritsar", "Bathinda", "Fatehgarh Sahib", "Gurdaspur", "Jalandhar", "Ludhiana", "Mansa", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar"] },
    { name: "Rajasthan", districts: ["Ajmer", "Alwar", "Bikaner", "Jaipur", "Jodhpur", "Kota", "Sikar", "Tonk"] },
    { name: "Sikkim", districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"] },
    { name: "Tamil Nadu", districts: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Tirunelveli", "Vellore"] },
    { name: "Telangana", districts: ["Adilabad", "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Medak", "Nalgonda", "Nizamabad", "Rangareddy"] },
    { name: "Tripura", districts: ["Dhalai", "North Tripura", "South Tripura", "West Tripura"] },
    { name: "Uttar Pradesh", districts: ["Agra", "Aligarh", "Allahabad", "Bareilly", "Ghazipur", "Lucknow", "Varanasi"] },
    { name: "Uttarakhand", districts: ["Almora", "Dehradun", "Nainital", "Pauri Garhwal", "Pithoragarh", "Tehri Garhwal", "Udham Singh Nagar"] },
    { name: "West Bengal", districts: ["Alipurduar", "Bardhaman", "Birbhum", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"] },
  ];
  
  export default indianStates;
  