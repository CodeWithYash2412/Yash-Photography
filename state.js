var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Predesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal");

var s_a = new Array();
s_a[0] = "";
s_a[1] = " Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island ";
s_a[2] = " Adoni | Amaravati | Anantapur | Chandragiri | Chittoor | Dowlaiswaram | Eluru | Guntur | Kadapa | Kakinada | Kurnool | Machilipatnam | Nagarjunakoṇḍa | Rajahmundry | Srikakulam | Tirupati | Vijayawada | Visakhapatnam | Vizianagaram | Yemmiganur ";
s_a[3] = "Itanagar | Pasighat | East Siang | Namsai | Naharlagun | Bordumse";
s_a[4] = "Dhuburi | Dibrugarh | Dispur | Guwahati | Jorhat | Nagaon | Sibsagar | Silchar | Tezpur | Tinsukia";
s_a[5] = "Ara | Baruni | Begusarai | Bettiah | Bhagalpur | Bihar Sharif | Bodh Gaya | Buxar | Chapra | Darbhanga | Dehri | Dinapur Nizamat | Gaya | Hajipur | Jamalpur | Katihar | Madhubani | Motihari | Munger | Muzaffarpur | Patna | Purnia | Pusa | Saharsa | Samastipur | Sasaram | Sitamarhi | Siwan";
s_a[6] = "Chandigarh";
s_a[7] = "Ambikapur | Bhilai | Bilaspur | Dhamtari | Durg | Jagdalpur | Raipur | Rajnandgaon";
s_a[8] = "Silvassa";
s_a[9] = "Daman | Diu";
s_a[10] = "Delhi | New Delhi";
s_a[11] = "Madgaon | Panaji";
s_a[12] = "Ahmadabad | Amreli | Bharuch | Bhavnagar | Bhuj | Dwarka | Gandhinagar | Godhra | Jamnagar | Junagadh | Kandla | Khambhat | Kheda | Mahesana | Morvi | Nadiad | Navsari | Okha | Palanpur | Patan | Porbandar | Rajkot | Surat | Surendranagar | Valsad | Verava";
s_a[13] = "Ambala | Bhiwani | Chandigarh | Faridabad | Firozpur Jhirka | Gurgaon | Hansi | Hisar | Jind | Kaithal | Karnal | Kurukshetra | Panipat | Pehowa | Rewari | Rohtak | Sirsa | Sonipat";
s_a[14] = "Bilaspur | Chamba | Dalhousie | Dharmshala | Hamirpur | Kangra | Kullu | Mandi | Nahan | Shimla | Una";
s_a[15] = "Anantnag | Baramula | Doda | Gulmarg | Jammu | Kathua | Punch | Rajauri | Srinagar | Udhampur";
s_a[16] = "Bokaro | Chaibasa | Deoghar | Dhanbad | Dumka | Giridih | Hazaribag | Jamshedpur | Jharia | Rajmahal | Ranchi | Saraikela";
s_a[17] = "Badami | Ballari | Bangalore | Belgavi | Bhadravati | Bidar | Chikkamagaluru | Chitradurga | Davangere | Halebid | Hassan | Hubballi-Dharwad | Kalaburagi | Kolar | Madikeri | Mandya | Mangaluru | Mysuru | Raichur | Shivamogga | Shravanabelagola | Shrirangapattana | Tumkuru";
s_a[18] = "Alappuzha | Badagara | Idukki | Kannur | Kochi | Kollam | Kottayam | Kozhikode | Mattancheri | Palakkad | Thalassery | Thiruvananthapuram | Thrissur";
s_a[19] = "Balaghat | Barwani | Betul | Bharhut | Bhind | Bhojpur | Bhopal | Burhanpur | Chhatarpur | Chhindwara | Damoh | Datia | Dewas | Dhar | Guna | Gwalior | Hoshangabad | Indore | Itarsi | Jabalpur | Jhabua | Khajuraho | Khandwa | Khargon | Maheshwar | Mandla | Mandsaur | Mhow | Morena | Murwara | Narsimhapur | Narsinghgarh | Narwar | Neemuch | Nowgong | Orchha | Panna | Raisen | Rajgarh | Ratlam | Rewa | Sagar | Sarangpur | Satna | Sehore | Seoni | Shahdol | Shajapur | Sheopur | Shivpuri | Ujjain | Vidisha";
s_a[20] = "Ahmadnagar | Akola | Amravati | Aurangabad | Bhandara | Bhusawal | Bid | Buldana | Chandrapur | Daulatabad | Dhule | Jalgaon | Kalyan | Karli | Kolhapur | Mahabaleshwar | Malegaon | Matheran | Mumbai | Nagpur | Nanded | Nashik | Osmanabad | Pandharpur | Parbhani | Pune | Ratnagiri | Sangli | Satara | Sevagram | Solapur | Thane | Ulhasnagar | Vasai-Virar | Wardha | Yavatmal";
s_a[21] = "Imphal";
s_a[22] = "Cherrapunji | Shillong";
s_a[23] = "Aizawl | Lunglei";
s_a[24] = "Kohima | Mon | Phek | Wokha | Zunheboto";
s_a[25] = "Balangir | Baleshwar | Baripada | Bhubaneshwar | Brahmapur | Cuttack | Dhenkanal | Keonjhar | Konark | Koraput | Paradip | Phulabani | Puri | Sambalpur | Udayagiri";
s_a[26] = "Karaikal | Mahe | Puducherry | Yanam";
s_a[27] = "Amritsar | Batala | Chandigarh | Faridkot | Firozpur | Gurdaspur | Hoshiarpur | Jalandhar | Kapurthala | Ludhiana | Nabha | Patiala | Rupnagar | Sangrur";
s_a[28] = "Abu | Ajmer | Alwar | Amer | Barmer | Beawar | Bharatpur | Bhilwara | Bikaner | Bundi | Chittaurgarh | Churu | Dhaulpur | Dungarpur | Ganganagar | Hanumangarh | Jaipur | Jaisalmer | Jalor | Jhalawar | Jhunjhunu | Jodhpur | Kishangarh | Kota | Merta | Nagaur | Nathdwara | Pali |Phalodi | Pushkar | Sawai Madhopur | Shahpura | Sikar | Sirohi | Tonk | Udaipur";
s_a[29] = "Gangtok | Gyalsing | Lachung | Mangan";
s_a[30] = "Arcot | Chengalpattu | Chennai | Chidambaram | Coimbatore | Cuddalore | Dharmapuri | Dindigul | Erode | Kanchipuram | Kanniyakumari | Kodaikanal | Kumbakonam | Madurai | Mamallapuram | Nagappattinam | Nagercoil | Palayankottai | Pudukkottai | Rajapalaiyam | Ramanathapuram | Salem | Thanjavur | Tiruchchirappalli | Tirunelveli | Tiruppur | Tuticorin | Udhagamandalam | Vellore";
s_a[31] = "Hyderabad | Karimnagar | Khammam | Mahbubnagar | Nizamabad | Sangareddi | Warangal";
s_a[32] = "Agartala";
s_a[33] = "Almora | Dehra Dun | Haridwar | Mussoorie | Nainital | Pithoragarh";
s_a[34] = "Agra | Aligarh | Amroha | Ayodhya | Azamgarh | Bahraich | Ballia | Banda | Bara Banki | Bareilly | Basti | Bijnor | Bithur | Budaun | Bulandshahr | Deoria | Etah | Etawah | Faizabad | Farrukhabad-cum-Fatehgarh | Fatehpur | Fatehpur Sikri | Ghaziabad | Ghazipur | Gonda | Gorakhpur | Hamirpur | Hardoi | Hathras | Jalaun | Jaunpur | Jhansi | Kannauj | Kanpur | Lakhimpur | Lalitpur | Lucknow | Mainpuri | Mathura | Meerut |Mirzapur-Vindhyachal | Moradabad | Muzaffarnagar | Partapgarh | Pilibhit | Prayagraj | Rae Bareli | Rampur | Saharanpur | Sambhal | Shahjahanpur |Sitapur | Sultanpur | Tehri | Varanasi";
s_a[35] = "Alipore | Alipur Duar | Asansol | Baharampur | Bally | Balurghat | Bankura | Baranagar | Barasat | Barrackpore | Basirhat | Bhatpara | Bishnupur | Budge Budge | Burdwan | Chandernagore | Darjiling | Diamond Harbour | Dum Dum | Durgapur | Halisahar | Haora | Hugli | Ingraj Bazar | Jalpaiguri | Kalimpong | Kamarhati | Kanchrapara | Kharagpur | Koch Bihar | Kolkata | Krishnanagar | Malda | Midnapore | Murshidabad | Navadwip | Palashi | Panihati | Purulia | Raiganj | Santipur | Shantiniketan | Shrirampur | Siliguri | Siuri | Tamluk | Titagarh";










function print_state(state_id) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option('Select State', '');
    option_str.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function print_city(city_id, city_index) {
    var option_str = document.getElementById(city_id);
    option_str.length = 0; // Fixed by Julian Woods
    option_str.options[0] = new Option('Select City', '');
    option_str.selectedIndex = 0;
    var city_arr = s_a[city_index].split("|");
    for (var i = 0; i < city_arr.length; i++) {
        option_str.options[option_str.length] = new Option(city_arr[i], city_arr[i]);
    }
}