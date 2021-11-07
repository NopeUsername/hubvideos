// instructions for any braindead people:
// step 1: upload video to videos/ folder
// step 2: go here, and do 'videos/nameofvideo.mp4', if its the one all the way at the bottom, dont add the ",". Thank you for your time
var videoArray = [
  'https://cdn.discordapp.com/attachments/799419671161733210/904835057489948702/My_intro.mp4',
  'https://cdn.discordapp.com/attachments/881656384352038963/888939092237238313/video0.mp4',
  'https://cdn.discordapp.com/attachments/883902480205905961/889500697538732092/WHA_DA.mp4',
  'videos/spong.mp4',
  'videos/jumpscare.mp4',
  'videos/rappingcat.mp4',
  'videos/veggietale.mp4',
  'videos/mathclass.mp4',
  'videos/halflife.mp4',
  'videos/ltg.mp4',
  'videos/top_infinity_cheese.webm',
  'videos/cocaina.mov',
  'videos/moyai.mp4',
  'videos/bro.mp4',
  'videos/THE_DVD.mp4',
  'videos/alonedoggo.mp4',
  'videos/dogepeic.mp4',
  'videos/funnydog.mp4',
  'videos/THE_ONE_PIECE.mp4',
  'videos/how_was_the_fall.mp4',
  'videos/video0-17-4.mp4',
  'videos/welcome_to_the_underground.mp4',
  'videos/onepiece.mp4',
  'videos/apple.mp4',
  'videos/istock.mp4',
  'videos/Remyboy.mp4',
  'videos/nicoarc.mp4',
  'videos/rightnow.mp4',
  'videos/flopdday.mp4',
  'videos/paid.mp4',
  'videos/dill.mp4',
  'videos/shoe.mp4',
  'videos/bob.mp4',
  'videos/zoroirlbelike.mp4',
  'videos/WHAT.mp4',
  'videos/pusi.mp4',
  'videos/banger.mp4',
  'videos/air_istotle.mp4',
  'videos/appel.mp4',
  'videos/demo_alarm.mp4',
  'videos/Ok.mp4',
  'videos/3D.mp4',
  'videos/peter.mp4',
  'videos/john.mp4',
  'videos/btd5.mp4',
  'videos/hereicome.mp4',
  'videos/minecrafdt.mp4',
  'videos/racist_santa.mp4',
  'videos/ibs.mp4',
  'videos/familymissing.mp4',
  'videos/oblivion.mp4',
  'videos/phonecall.mp4',
  'videos/beat.mp4',
  'videos/HIS_FRIES.mp4',
  'videos/pack.mov',
  'videos/veggies.mp4',
  'https://cdn.discordapp.com/attachments/857979217257955358/888969393793544203/video0_-_2021-07-14T024900.328.mp4',
  'videos/the_cream.mp4',
  'https://cdn.discordapp.com/attachments/881656384352038963/888907647565324288/niko_1.mp4',
  'videos/bomb.webm',
  'videos/baaldud.mp4',
  'videos/gone.mp4',
  'videos/laff.mp4',
  'videos/oyoyoyoyoyoyoy.mp4',
  'videos/video0-1286.mp4',
  'videos/video0-549.mp4',
  'videos/tom.mp4',
  'videos/z.mp4',
  'videos/club_penguin_cart_ride.mp4',
  'videos/hackerman.mp4',
  'videos/hort.mp4',
  'videos/benjamin frenkle.mp4',
  'videos/beam.mp4',
  'videos/among.mov',
  'videos/i_fell_down.mp4',
  'videos/I_fell_down_in_DS_C02_and_this_came_to_mind.mp4',
  'videos/be_a_big_shot.mp4',
  'videos/sleep.mp4',
  // New videos as of 9/25/2021, 4:20 PM (in romanian time)
  // - ShadeblastHere
  'videos/oh_hell_no.mp4',
  //
  'videos/ltgv2.mp4',
  'videos/put-a-finger-down.mp4',
  'videos/funky.mp4',
  'videos/another-canister.mp4',
  'videos/snake-in-my-boot.mp4',
  'videos/bugs-life.mp4',
  'videos/slink-da-kink.mp4',
  'videos/another-grail.mp4',
  'videos/monsters-university.mp4',
  'videos/rattatooly.mp4',
  'videos/handsome-squidward.mp4',
  // New videos as of 10/23/2021, 3:08 AM (in romanian time)
  // - ShadeblastHere
  'videos/thisdude.mp4',
  'videos/GCSDK_fish.webm',
  'videos/long_way_from_texas.mp4', // And nobody noticed.
  'videos/experimente.mp4',
  'videos/exploiters.mp4',
  'videos/sex_win.mp4',
  'videos/chirumiru.mp4',
  'videos/screwthenether.mp4',
  'videos/sew_ner.mp4',
  'videos/video0_9-9.mp4',
  'videos/soccer.mp4',
  'videos/succ.mp4',
  'videos/screamroom.mp4',
  'videos/youre_not_here_alone.mp4',
  'videos/musolinni_feesh.mp4',
  'videos/robloxian.mp4',
  'videos/the_good_music.mp4',
  'videos/LUFFY_NO.mp4',
  'videos/boris.mp4',
  'videos/la_creatura-1.mp4',
  'videos/Penis_dubstep_intro240P.mp4',
  'videos/SAKUYA_GIVING_CIRNO_THE_FISHE_--------240P.mp4',
  'videos/Sin_titulo_100_480p.mp4',
  'videos/shocking_discovery.mp4',
  'videos/Real_life_Father_Grigori_Half_Life_2_meme.mp4',
  'videos/gock.mp4',
  'videos/spider.mp4',
  'videos/kit.mp4',
  'videos/video0-6-19-1.mp4',
  'videos/okay_i_pull_up_hop_out_at_the_after_party_you_and_all_your_friends_yeah_they_love_to_get_naughtysipp.mp4',
  'videos/ichiban.mp4',
  'videos/tunak.mp4',
  'videos/broke_ass.mp4',
  //
  // I think you know the drill by now
  // 10/31/2021
  'videos/pigalert.mp4',
  // Fuck
  // 11/3/2021
  'videos/ferb.mp4',
  'videos/what_the_hell_is_this.mp4',
  'videos/whateven.mp4',
  'videos/hack.mp4',
  'videos/roblox-1.mp4',
  'videos/roblox_client_1995.mp4',
  'videos/old_roblox.mp4',
  'videos/misterobvious.mp4',
  'videos/Gangsta_Rap_-_Ni__a_Ni__a_Ni__a_Clean_Version.mp4',
  'videos/Windows_Gangster_Edition.mp4',
  'videos/joe_biden.mp4',
  'videos/for_you.mp4',
  'videos/damn_daniel.mp4',
  'videos/That_oughta_do_it.mp4',
  'videos/Amarillo_amarillo_los_platanos_240P_1.mp4',
  'videos/My_somewhat_useless_invention.mp4',
  'videos/unibombed.mp4',
  'videos/EPIC.mp4',
  'videos/pornoputas.mp4',
  'videos/LMFAO0.mp4',
  'videos/battleofwits.mp4',
  'videos/eminem_turtle_1.mp4',
  'videos/jumpscare-2.mp4',
  'videos/youu.mp4',
  'videos/THE_DOOR.mp4',
  'videos/no_bomb.mp4',
  'videos/doctor_freeeeman.mp4',
  'videos/download_hl_2_free.mp4',
  'videos/free_bosnian_half_life_steam_cd_key_no_fkae.mp4',
  //
  'videos/AAAUGH.mp4',
  //
  'videos/GREEN_SAMUS.mp4',
  'videos/pala.mp4',
  'videos/bin.mp4',
  'videos/blya.mp4',
  'videos/Angry_Russian_Sound_Effect_Anomaly_1.mp4',
  'videos/russia.mp4',
  'videos/Russian_sneeze.mp4',
  'videos/russian_cat_hangover.mp4',
  'videos/betmen.mov',
  'videos/Ultrakill.mp4',
  'videos/Traktor.mp4',
  'videos/GOOOOST.mov',
  'videos/rat-2.mp4',
  'videos/rat_capture.mp4',
  'videos/crat.mp4',
  'videos/rate_throw_plague_be_upon_you.mp4',
  'videos/racoon.mp4',
  'videos/ebf5_soundtrack.mp4',
  'videos/TRACKED.mp4',
  'videos/The_feeling_the.mp4',
  'videos/kotttot.mp4',
  'videos/Nymphis_Fae_but_its_mixed_together_with_JECXZ_Start.mp4',
  //
  // 11/3/2021 (6:46 PM)
  'videos/IDC_POLISH_RAP.mp4',
  'videos/you_stupid.mp4',
  'videos/crazy.mp4',
  'videos/CrazyFrog.mp4',
  'videos/crazy_penguin.mp4',
  'videos/crazy_dave.mp4',
  'videos/fuc_you_rusia.mp4',
  'videos/Alto_ahi_hermano.mp4',
  'videos/On_February_26th_2007_Philip_Dicks_was_was_mauled_to_death_by_a_low_poly_lion_in_Fairbanks_Alaska.mp4',
  'videos/afton.mp4',
  'videos/avalon.mp4',
  'videos/simon_fucking_cowell.mp4',
  'videos/oblivion.mp4',
  'videos/online.mp4',
  'videos/Demon_Possessed_Singing_Trout.mp4',
  'videos/conductor.mp4',
  'videos/I_will_become_back_my_money.mp4',
  'videos/DAYTONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.mp4',
  'videos/conscriptwmv.webm',
  'videos/Look_at_this_nigga_on_this_shit.mp4',
  'videos/sponge.mp4',
  'videos/dont_ever_buy_weed_from_a_gas_station.mp4',
  'videos/camel_singing_maliali_song.mp4',
  'videos/Real_Indonesian_Gaming.mp4',
  'videos/Vinesauce_Vinny_experiences_Star_Warped_question_3.mp4',
  'videos/Cutting_an_onion.mp4',
  'videos/3Diamond_Sword_Rap_by_Tobuscus.mp4',
  'videos/tonight.mp4',
  'videos/i_dont_understand.mp4',
  'videos/sword_fight_on_the_heights.mp4',
  'videos/GEN_Z_DELUXE_EDITION.webm',
  'videos/stupid_phone.mp4',
  'videos/boobie_trap.mp4',
  'videos/THE_GRIM_RAPPER.mp4',
  'videos/rap.mp4',
  'videos/Macaco_artes_marciales.mp4',
  'videos/mr_krabs_gets_votekicked.mp4',
  'videos/tcorndorgyesveryfunnyyemioemwroiwmrewrmowimrower.mp4',
  'videos/Captain_Vance_tragic_death_scene.mp4',
  'videos/cat_toilet.mp4',
  'videos/cat_jumpscare.mp4',
  'videos/cat_voice_career.mp4',
  'videos/CATGIRLDEADLOL.mp4',
  'videos/arabic-cat.mp4',
  'videos/yocat.mp4',
  'videos/catmid.mp4',
  'videos/cool_cat.mp4',
  'videos/catrun.mp4',
  'videos/Fat_ass_tuxedo_cat.mp4',
  'videos/cat_roomba_.mp4',
  'videos/cat_cube_2.mp4',
  'videos/catters.mp4',
  'videos/cat_cylinder.mp4',
  'videos/angelcat_1.mp4',
  'videos/game.mp4',
  'videos/what_is_this.mp4',
  // SPONGEBOBP :D 11/3/2021 9:32 PM EST Exruw
  'videos/spongebopb.mp4',
  'videos/GeorgeOfTheJungle.webm',
  // fetch me their souls 11/4/2021 romanian
  'videos/dullahan.mp4',
  'videos/insanity.mp4',
  'videos/hackermode.mp4',
  'videos/canada.mp4',
  'videos/burgerking.mp4',
  'videos/pala.mp4',
  'videos/aerodynamics.mp4',
  'videos/patrick.mp4',
  'videos/apocalypse.mov',
  'videos/Horde.mp4',
  'videos/wither.mp4',
  // mr banger tweet
  // 11/4/2021
  'videos/video0-1-1-1_1.mp4',
  'videos/0e0dc8ce78c2277e4fd834a930119462.mp4',
  //11/5/2021
  //AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
  'videos/kids.mov',
  'videos/video0.mp4',
  //
  // 11/6/2021
  // ShadeblastHere
  // Shut the fuck up
  'videos/UUUUUA_AUUUUU.mp4',
  'videos/joelghost.mp4',
  'videos/christmes.mp4',
  'videos/mexican.mp4',
  'videos/NATS.mp4',
  'videos/balls.mp4',
  'videos/balls-1.mp4',
  'videos/GiveUsYourBalls.mp4',
  'videos/dawg.mp4',
  'videos/string_shrk.mp4',
  'videos/I_will_become_back_my_money.mp4',
  'videos/payacho.webm',
  'videos/video0-224.mp4',
  'videos/staring.mp4',
  'videos/touching_payphone.mp4',
  'videos/payphone_rain.mp4',
  'videos/albanian.mp4',
  'videos/fatherless_child-1.mp4',
  'videos/accordionhorse.mp4',
  'videos/clevealand.mp4',
  'videos/food_criminal.mp4',
  'videos/train.mp4',
  'videos/dogdogdogdogdogdog.mp4',
  'videos/aprilfools.mp4',
  'videos/naenae.mp4',
  'videos/doin.mp4',
  'videos/doinyourmom.mp4',
  //
  //2003boobear
  //no
  'videos/tank.mov',
  'videos/pizza.mp4',
  'videos/quarter.mp4',
  'videos/parachute.mp4',
  'videos/trust_me_on_this_it_is_soo_good.mp4',
  'videos/patrick_roasts_krabs.mp4',
  'videos/United_Home_Security.mp4',
  'videos/construct_pool.mp4',
  'videos/britian.mp4',
  'videos/aneruca.mp4',
  'videos/ashamed.mp4',
  'videos/in_tears.mp4',
  'videos/i_know_i_fiona.mp4',
  'videos/wah_is_coming.mp4',
  'videos/astronaut_game.mp4',
  'videos/who_you_here_to_meet.mp4',
  //11/7/2021
  //2003boobear
  //genius!
  'videos/something_serious.mov',
  'videos/duck_dance.mp4',
  'videos/gato.mp4',
  'videos/pan_hit.mp4',
  'videos/sad_mood.mp4',
  'videos/dog_cat.mp4',
  'videos/wrath.mp4',
  'videos/reddit.mp4',
  'videos/alerta_de_intrusos.mp4',
  'videos/slogcat.mov',
  'videos/i_was_born.mp4',
  'videos/wii.mp4',
  'videos/bacon.mp4',
  'videos/lets_goooooooooo.mp4',
  'videos/bowl.mp4',
  'videos/music.mp4',
  'videos/hello.mp4',
  'videos/alerta_de_macaco.mp4',
  'videos/school_lunch.mp4',
  'videos/bottle.mp4',
  'videos/that_true.mp4',
  // 11/7/2021 6:52 PM my balls
  // ShadeblastHere
  'videos/20dollarhairnats.mp4',
  'videos/HOMER_IS_DEAD.mp4',
  'videos/nightma.mp4',
  'videos/Crystal_Weed.mp4',
  'videos/Nebunu_weed.mp4',
  'videos/weed_milk_tutorial.mp4',
  'videos/A.mp4',
  'videos/dies.mp4',
  'videos/cloroform.mp4',
  'videos/my_dad_works_for_the_central_intelligence_agency.mp4',
  'videos/a_simpear.mp4',
  'videos/majima.mp4',
  'videos/the_ultimate_showdown.mp4',
  'videos/im_dead_asf.mp4',
  'videos/its_time_to.mp4',
  'videos/mimic.mp4',
  'videos/Im_not_your_daddy_Im_your_grandpa_GEICO_Commercial.mp4',
  'videos/all_rage_faces.mp4',
  'videos/McDragers.mp4',
  'videos/kill.mp4',
  'videos/kfc_man_dies.mp4',
  'videos/soldier_turn.mp4',
  'videos/You_have_6_hours_28_minutes_38_seconds.mp4',
  'videos/peanut_butter_jelly_time.mp4',
  'videos/jojoe.mp4',
  'videos/whore.mp4',
  'videos/U.mp4',
  'videos/arbier.mp4',
  'videos/stare.mp4',
  'videos/the_final_meme.mp4',
  'videos/lalalalllalalalalal.mp4',
  'videos/You_know_who_it_is.mp4',
  'videos/video0-98-2.mp4',
  'videos/GET_R.mp4',
  'videos/elliscomeonman.mp4',
  'videos/builderman_2010.mp4',
  'videos/GIT.mp4',
  'videos/jiggy.mp4',
  'videos/Homer_Goes_Postal.mp4',
  'videos/ad_for_vehicular_manslaughter.mp4',
  'videos/epicvideo.mp4',
  'videos/get_down.mp4',
  'videos/liveleak.mp4',
  'videos/brooo.mp4',
  'videos/ice_cream.webm',
  'videos/fish.mp4',
  'videos/danincg.mp4',
  'videos/danceofgods.mp4'
  //
]

export function getArray() {
  return videoArray
}

export function getRandomVideo() {
  return videoArray[Math.floor(Math.random() * videoArray.length)]
}
