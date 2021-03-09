git init nama-repo
- membuat repo dan folder baru

git init .
- membuat repo dari working direktori

git remote 
- melihat nama remote

git status
- untuk melihat status git

git add
- untuk memindahkan ke staging area atau tracking file & folder

git commit -m "PESAN"

git push
- untuk menyingkronkan ke github

git config --list
- untuk melihat list config

Kalau ada konflik pada remote yg harus dilakukan

    1. git fetch
    - untuk mengecek commit pada remote. untuk menangani jika ketika melalakukan push ada konflik di remote

    2. git status
    - setelah di fetch status akan berubah

    3. git pull
    - untuk menyelesaikan konflik secara manual

:q
-untuk keluar dari config list

untuk mengganti username disemua folder
- git config --global user.name "USERNAME"
- git config --global user.email "EMAIL"

git remote -v
origin  https://github.com/awlbas/financial-checkup.git (fetch)
origin  https://github.com/awlbas/financial-checkup.git (push)

rename pointed
- git branch -m <oldname> <newname>

rename recent
- git branch -m <newname>

delete branch
git branch -d branch_name
git branch -D branch_name

ke commit sebelumnya kemudian hapus commit yg setelahnya
git reset --hard 0d1d7fc32

# This will detach your HEAD, that is, leave you with no branch checked out: 
git checkout 0d1d7fc32

Or if you want to make commits while you're there
git checkout -b old-state 0d1d7fc32

