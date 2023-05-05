Tiga poin penting yang telah saya perlajari dari materi “GraphQL - Subscription” sebagai berikut:
1. GraphQL Subscription adalah fitur tambahan dari GraphQL yang memungkinkan pengguna untuk menerima update secara real-time dari server. Dalam GraphQL Subscription, pengguna dapat mendaftarkan diri untuk menerima notifikasi ketika ada perubahan data di dalam API, seperti pembuatan atau penghapusan data. 
2.  Berikut adalah penjelasan tentang GraphQL Subscription:
1.Menentukan Subscription
Pengguna dapat menentukan Subscription dengan mengirimkan permintaan ke server dengan format yang sama seperti Query atau Mutation. Namun, Subscription memiliki perbedaan dengan Query dan Mutation karena ia memiliki fitur yang memungkinkan server untuk mengirimkan data secara real-time ke pengguna.
2. Mengaktifkan Subscription
Setelah pengguna menentukan Subscription, server akan mengaktifkan Subscription tersebut. Pengguna kemudian akan menerima notifikasi ketika terjadi perubahan data di dalam API yang sesuai dengan Subscription yang telah dibuat.
3. Menerima Data
Ketika terjadi perubahan data di dalam API, server akan mengirimkan data baru ke pengguna yang telah melakukan Subscription. Pengguna kemudian dapat menggunakan data tersebut untuk memperbarui tampilan atau melakukan tindakan yang diperlukan. 
Dengan adanya Subscription, pengguna dapat mengambil data secara real-time dan mengurangi latensi dalam aplikasi.
