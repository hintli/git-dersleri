/*
//Git Nedir?
    versiyonun ismi
    tarih 
    kullanıcı

    versiyon2den versiyon1 e dönmek istediğimizde 
    git işimizi görür

//Linux Kurulum 
    sudo apt-get install git

//Git Yapılandırılması
    kullanıcı adı ve mail tanıtma
    git config --global user.name "kullanıcı adınız"
    git config --global user.email "email adresiniz"

    --global //bu sistemdeki kullanıcı

//Git Projesi Oluşturma
    Git projesi oluşturmak için şu komutu kullanmanız yeterli ;
    git init
    Oluşturduğunuz gizli git dosyalarını listelemek için şu komutu çalıştırabilirsiniz:
    ls -a

//Commit & Log
proje dosyalarını git repository ' ye (git deposuna) eklemeyi  gerçekleştiriyoruz. Komutlar şu şekilde :
git add . //stacing area dediğimiz geçiş bölgesinde
git commit -m "mesaj" //şimdi git deposunda

Aldığımız versiyonların tamamını listelemek için şu komutu çalıştırıyoruz:
git log

//Status
    git projemize dosyalar ekleyerek birden fazla versiyonlar alıcaz
    git projelerimizdeki değişimleri gösteren status komutunu işliycez
    master->şuanki bulunduğumuz proje adı
    git status//değişiklikleri göster -çalışma dizini, git reposu farkı

    çalışma dizini
    geçiş bölgesi
    git reposu

//Git İş Akışı
    git bölümleri:çalışma dizini, geçiş bölgesi(gözden geçir) ve git deposu.
    working directory-add->staging area-commit->git repository
    kırmızı-yeşil-yok




*/