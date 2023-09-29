#!/usr/bin/bash

#№1
mkdir -p lab0/{krokorok1,shieldon3/{woobat,scyther},whiscash5/{klang,monferno}}

cd lab0/

echo "Способности Rock Blast Withdraw Sand-Attack Faint Attack
Smack Down Rock Polish Bug Bite Stealth Rock Rock Slide Slash
X-Cissor Shell Smash Flail Rock Wrecker" >> crustle4

cd krokorok1/

echo "Возможности
Overland=8 Sruface=3 Jump=6 Power=2 Intelligence=4
Threaded=0" >> ariados

echo "Развитые способности Unaware" >> wooper

echo "Тип диеты
Omnivore" >> simisage

echo "Способности Odor Sleuth Bite Helping Hand Take
Down Work Up Crunch Roar Retaliate Reversal Last Resort Giga 
Impact" >> stoutland

echo "Способности Scratch Yawn Encore Slack Off Faint
Attack Amnesia Covet Chip Away Counter Flail" >> slakoth

cd ~/lab0/shieldon3/
echo "Развитые
способности Cursed Body" >> dusknoir

cd ..
echo "Способности Growl Scratch Focus
Energy Ember Peck Sand-Attack Fire Spin Quick Attack Slash Mirror Move
Flamethrower" >> torchic0

echo "Тип покемона NORMAL
FLYING" >> tranquill1

cd whiscash5/
echo "Способности Quick Attack Wing Attack Double Team
Endeavor Whirlwind Aerial Ace Take Down Agility Brave Bird Final
Gambit" >> staravia
cd ..

#№2
chmod 006 crustle4 #chmod a-rwx chmod o+r
chmod 753 krokorok1 
chmod 640 krokorok1/ariados
chmod 622 krokorok1/wooper
chmod 060 krokorok1/simisage
chmod 622 krokorok1/stoutland
chmod 620 krokorok1/slakoth
chmod 315 shieldon3
chmod 444 shieldon3/dusknoir
chmod 335 shieldon3/woobat
chmod 550 shieldon3/scyther
chmod 006 torchic0
chmod 440 tranquill1
chmod 375 whiscash5
chmod 537 whiscash5/klang
chmod 524 whiscash5/monferno
chmod 400 whiscash5/staravia


#№3
chmod u+r ~/lab0/whiscash5 #cp: cannot create directory '/home/fedoswsl/lab0/whiscash5/monferno/whiscash5': Permission denied
chmod u+w ~/lab0/whiscash5/monferno #см. комментарий выше
mkdir ~/lab0/temp_for_whiscash5
cp -r ~/lab0/temp_for_whiscash5 ~/lab0/whiscash5/monferno
rmdir ~/lab0/temp_for_whiscash5
chmod u-r ~/lab0/whiscash5
chmod u-w ~/lab0/whiscash5/monferno
ln -s ~/lab0/krokorok1 Copy_67
cat ~/lab0/shieldon3/dusknoir ~/lab0/krokorok1/wooper > ~/lab0/crustle4_94
chmod u+w ~/lab0/whiscash5/klang #cp: cannot create regular file '/home/fedoswsl/lab0/whiscash5/klang/tranquill1': Permission denied
cp tranquill1 ~/lab0/whiscash5/klang
chmod u-w ~/lab0/whiscash5/klang
chmod u+r ~/lab0/torchic0 #cat: /home/fedoswsl/lab0/torchic0: Permission denie
cat ~/lab0/torchic0 > ~/lab0/whiscash5/staraviatorchic
chmod u-r ~/lab0/torchic0
ln -s ~/lab0/crustle4 ~/lab0/krokorok1/ariadoscrustle
ln ~/lab0/tranquill1 ~/lab0/krokorok1/simisagetranquill

#№4

#4.1 
chmod u+w ~/lab0/tranquill1 #-bash: tranquill1: Permission denied
cat ~/lab0/tranquill1 | wc -m >> ~/lab0/tranquill1 2>&1 #ОСТАВИЛ ТОЛЬКО КОЛ-ВО
chmod u-w tranquill1
#4.2 
ls -lR 2>/dev/null | sort -nrk2 | grep "r$" | head -n3 
#4.3
cat tranquill1 | grep -v "^Qu" #-v inverted match
#4.4
#НАДО ЧТОБЫ БЫЛО РЕКУРСИВНО!!
#для примера
mkdir -p asd/{a,b,c/{g,h,w}}
cd ~/lab0/asd/c/w
echo "this is the output for an example"
grep -rh ".*" ./w* 2>/tmp/for_errors| sort
#4.5
ls -lRrt | tail -n2 2>&1 #ОТСОРТИРОВАЛ ПО ВОЗРАСТАНИЮ
#4.6
ls -lRt s* | head -n4 2>/tmp/for_errors #-t ПО УБЫВАНИЮ

#№5
rm -f crustle4
rm -f ~/lab0/shieldon3/dusknoir
rm Copy_*
rm -f ~/lab0/krokorok1/simisagetranqui*
rmdir shieldon3 #1) chmod 777 ~/lab0/shieldon3 2)rm -rf shieldon3
rmdir ~/lab0/shieldon3/scyther
