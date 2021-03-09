__construct() digunakan untuk menjalankan method pada Class secara otomatis

mvc

1. buat folder app dan public

	folder app berisi folder views, controllers & models. serta folder yang lain untuk melengkapi. contoh core yang digunakan berisi file utama. {
	
		file app/.htaccess
		digunakan untuk menghalangi user untuk masuk kedalam folder app. tidak boleh masuk kedalam folder app yang tidak ada file index nya

		file App.php adalah sebuah class yang mempunyai:
		method parseURL yang berfungsi untuk memecah url yang nanti dimasukan kedalam sebuah variabel array dengan nama $url
		
		property yang berisikan nilai default variabel $controller yang akan mengisi url controller dengan 'Home' yang dengan url itu akan memanggil Class Home di file app/controllers/Home.php
		
		property yang berisikan nilai default variabel $method yang akan mengisi url method dengan 'index' yang dengan url itu akan memanggil Class index di file app/controllers/Home.php
	}
	
	folder public berisi file yang akan dan boleh diakses oleh user berbeda dengan folder app yang hanya boleh diakses oleh pengembang. {

		file public/index.php
		berfungsi sebagai halaman utama yang akan ditampilkan kepada user.

		file ini hanya menjalankan fungsi koneksi untuk menyambungkan dengan file init.php, yang file ini berfungsi untuk menyambungkan berbagai Class yang ada pada aplikasi kita

		file public/.htaccess 
		fungsi utama file ini, jadi setiap karakter yang ditulis di url setelah public/ maka jadikan sebagai tambahan bagi url index.php?url= (ini adalah metode untuk mengirimkan nilai kedalam variabel $_GET )

		jadi untuk mengirim nilai ke dalam variabel $_GET dengan index 'url' tidak perlu lagi menulis 'index.php?url=...' 
	}





















