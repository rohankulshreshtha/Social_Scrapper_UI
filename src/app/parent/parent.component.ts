import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  restItems: any;
  restItemsUrl = '/app/scrape/combined?name=';
  insta:any;
  twitter:any;
  wiki:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  handleClick() {
    console.log($('#search_input').val());
    $('#loader_area').removeClass('d-none');
    var myDiv = $("#loader");
    var scrollto = myDiv.offset().top - (400);
    $([document.documentElement, document.body]).animate({
        scrollTop: scrollto
    }, 2000);
    this.restItemsUrl += ($('#search_input').val()).split(' ').join('%20');

    // http://13.233.104.220:5000/scrape/combined?name=narendra%20modi
    // console.log("test");
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log('test',this.restItems);
          this.insta = this.restItems.insta.data;
          this.twitter = this.restItems.twitter;
   //        this.insta = [
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/31447d55cd5813c33058fa83790bd344/5E5C3BBD/t51.2885-15/sh0.08/e35/s640x640/71785159_239976373651574_3211464039019107033_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/3358ed6d8b53242e806fe3e0fef6eaf5/5DC14239/t51.2885-15/e35/c0.186.480.480a/75207249_174108077070002_5017215864479506259_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/12d3db1b1d48a02b6209aea0e14af2b2/5E6031DC/t51.2885-15/sh0.08/e35/c0.0.1439.1439a/s640x640/71089944_973747092969975_9048420518530169358_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/06f3df8b964c33f1dccb51ca2ecd7703/5E4E52B5/t51.2885-15/sh0.08/e35/s640x640/73524889_598234707559991_9222498897212037250_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/199dea30c3b41b8bbcb76036a191e580/5E61FE7F/t51.2885-15/sh0.08/e35/s640x640/70579078_764070204044365_745687337021665046_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/b8eb58ca39ce8ecaf20b5da65551c478/5E4770BE/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/69855283_139486320705370_2028965945678788335_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/f9ef99be960f16ceccf59c46adfd5fc1/5E4C8AE4/t51.2885-15/sh0.08/e35/c1.0.1437.1437a/s640x640/71025240_130351157920983_5704315741209915348_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/e5b5e220754633a6c4125f474a28878a/5E5EE9CD/t51.2885-15/sh0.08/e35/c5.0.1430.1430a/s640x640/70589945_193438811662144_553478662300062207_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=104",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/327a5f383cce07fc0bd5e0eb6cccd418/5E416485/t51.2885-15/sh0.08/e35/c252.0.936.936a/s640x640/69947857_390818804945688_9062357352709330760_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=100",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/5c148fc0c243ceceda84177e698b7bc8/5E4BC1AA/t51.2885-15/sh0.08/e35/s640x640/70013815_442261713163110_1491261247346893968_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=106",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/fa14f2f49571c33b7568242b9f8d3c67/5E4F800A/t51.2885-15/sh0.08/e35/c155.0.1129.1129a/s640x640/68932177_456594004959399_4770393439992350886_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=103",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/15b9f8e81d5cf600121c73012bf18891/5E3E4D53/t51.2885-15/sh0.08/e35/c160.0.1119.1119a/s640x640/70164431_386915661983892_703237823779715506_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/7967ccba1ecc5cb995c90bd258c47115/5E5351E6/t51.2885-15/sh0.08/e35/c213.0.1014.1014a/s640x640/67522638_148293309708252_4256271736900873428_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=100",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/247fdc913a9771307a0d513157dffa99/5E5BC3AD/t51.2885-15/sh0.08/e35/s640x640/67596857_370500073870776_7130716145732492577_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/a8faf3ce3a70a5634575f37844d3b7a0/5E5ABDE8/t51.2885-15/sh0.08/e35/c44.0.1351.1351a/s640x640/69242288_2304265483220778_8349357625598641528_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=106",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/32df0ef4bad2be81028facc460af44a0/5E482C9E/t51.2885-15/sh0.08/e35/s640x640/69278900_381187979259310_3771398145788577603_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/03dfe439f6d7aab7f2008eee58926fdf/5E46F1EF/t51.2885-15/sh0.08/e35/c291.0.857.857a/s640x640/67809946_608779082980263_5672477750915748593_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=103",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/2b07bc3ae7e899dde94b390d70f14070/5E5468F3/t51.2885-15/sh0.08/e35/s640x640/67465608_153407299078238_7404469472334982736_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102",
   //              "accessibility_caption": ""
   //           },
   //           {
   //              "thumbnail_src": "https://scontent-sin6-2.cdninstagram.com/vp/33d3b7faee89d24b11421e0318231b33/5E5A7BF1/t51.2885-15/sh0.08/e35/s640x640/66601726_2088856308076388_8045691090126030193_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=108",
   //              "accessibility_caption": ""
   //           }
   //        ];
   //        this.twitter = [
   //        {
   //           "created_at": "Mon Nov 04 11:00:45 +0000 2019",
   //           "id": 1191309301387649000,
   //           "id_str": "1191309301387649026",
   //           "text": "Coming together for a better future for our planet. \n\nToday’s East Asia Summit was characterised by fruitful delibe… https://t.co/cOecHCsy9l",
   //           "truncated": true,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [
   //                 {
   //                    "url": "https://t.co/cOecHCsy9l",
   //                    "expanded_url": "https://twitter.com/i/web/status/1191309301387649026",
   //                    "display_url": "twitter.com/i/web/status/1…",
   //                    "indices": [
   //                       117,
   //                       140
   //                    ]
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 877,
   //           "favorite_count": 5293,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Mon Nov 04 10:57:28 +0000 2019",
   //           "id": 1191308475365617700,
   //           "id_str": "1191308475365617664",
   //           "text": "It is always wonderful to meet my friend, PM @AbeShinzo. \n\nOur meeting today was very good. We exchanged views on m… https://t.co/lDX2I7hQ50",
   //           "truncated": true,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [
   //                 {
   //                    "screen_name": "AbeShinzo",
   //                    "name": "安倍晋三",
   //                    "id": 468122115,
   //                    "id_str": "468122115",
   //                    "indices": [
   //                       45,
   //                       55
   //                    ]
   //                 }
   //              ],
   //              "urls": [
   //                 {
   //                    "url": "https://t.co/lDX2I7hQ50",
   //                    "expanded_url": "https://twitter.com/i/web/status/1191308475365617664",
   //                    "display_url": "twitter.com/i/web/status/1…",
   //                    "indices": [
   //                       117,
   //                       140
   //                    ]
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 862,
   //           "favorite_count": 5328,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Mon Nov 04 10:56:56 +0000 2019",
   //           "id": 1191308339755356200,
   //           "id_str": "1191308339755356160",
   //           "text": "友人である安倍晋三首相にお会いするのは私にとって常に喜びです。\n本日の会談も有意義なものでした。私たちは、印日経済パートナーシップのさらなる強化や、他のテーマについて意見交換をしました。\n@AbeShinzo https://t.co/jFyeWyQI9T",
   //           "truncated": false,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [
   //                 {
   //                    "screen_name": "AbeShinzo",
   //                    "name": "安倍晋三",
   //                    "id": 468122115,
   //                    "id_str": "468122115",
   //                    "indices": [
   //                       94,
   //                       104
   //                    ]
   //                 }
   //              ],
   //              "urls": [],
   //              "media": [
   //                 {
   //                    "id": 1191308332675416000,
   //                    "id_str": "1191308332675416064",
   //                    "indices": [
   //                       105,
   //                       128
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/media/EIhgneMUwAADHsK.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/media/EIhgneMUwAADHsK.jpg",
   //                    "url": "https://t.co/jFyeWyQI9T",
   //                    "display_url": "pic.twitter.com/jFyeWyQI9T",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1191308339755356160/photo/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "medium": {
   //                          "w": 893,
   //                          "h": 1200,
   //                          "resize": "fit"
   //                       },
   //                       "large": {
   //                          "w": 1524,
   //                          "h": 2048,
   //                          "resize": "fit"
   //                       },
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "small": {
   //                          "w": 506,
   //                          "h": 680,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {
   //                       "medium": {
   //                          "faces": [
   //                             {
   //                                "x": 474,
   //                                "y": 213,
   //                                "h": 69,
   //                                "w": 69
   //                             }
   //                          ]
   //                       },
   //                       "large": {
   //                          "faces": [
   //                             {
   //                                "x": 810,
   //                                "y": 364,
   //                                "h": 118,
   //                                "w": 118
   //                             }
   //                          ]
   //                       },
   //                       "small": {
   //                          "faces": [
   //                             {
   //                                "x": 268,
   //                                "y": 120,
   //                                "h": 39,
   //                                "w": 39
   //                             }
   //                          ]
   //                       },
   //                       "orig": {
   //                          "faces": [
   //                             {
   //                                "x": 810,
   //                                "y": 364,
   //                                "h": 118,
   //                                "w": 118
   //                             }
   //                          ]
   //                       }
   //                    }
   //                 }
   //              ]
   //           },
   //           "extended_entities": {
   //              "media": [
   //                 {
   //                    "id": 1191308332675416000,
   //                    "id_str": "1191308332675416064",
   //                    "indices": [
   //                       105,
   //                       128
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/media/EIhgneMUwAADHsK.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/media/EIhgneMUwAADHsK.jpg",
   //                    "url": "https://t.co/jFyeWyQI9T",
   //                    "display_url": "pic.twitter.com/jFyeWyQI9T",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1191308339755356160/photo/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "medium": {
   //                          "w": 893,
   //                          "h": 1200,
   //                          "resize": "fit"
   //                       },
   //                       "large": {
   //                          "w": 1524,
   //                          "h": 2048,
   //                          "resize": "fit"
   //                       },
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "small": {
   //                          "w": 506,
   //                          "h": 680,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {
   //                       "medium": {
   //                          "faces": [
   //                             {
   //                                "x": 474,
   //                                "y": 213,
   //                                "h": 69,
   //                                "w": 69
   //                             }
   //                          ]
   //                       },
   //                       "large": {
   //                          "faces": [
   //                             {
   //                                "x": 810,
   //                                "y": 364,
   //                                "h": 118,
   //                                "w": 118
   //                             }
   //                          ]
   //                       },
   //                       "small": {
   //                          "faces": [
   //                             {
   //                                "x": 268,
   //                                "y": 120,
   //                                "h": 39,
   //                                "w": 39
   //                             }
   //                          ]
   //                       },
   //                       "orig": {
   //                          "faces": [
   //                             {
   //                                "x": 810,
   //                                "y": 364,
   //                                "h": 118,
   //                                "w": 118
   //                             }
   //                          ]
   //                       }
   //                    }
   //                 },
   //                 {
   //                    "id": 1191308333413621800,
   //                    "id_str": "1191308333413621760",
   //                    "indices": [
   //                       105,
   //                       128
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/media/EIhgng8U4AAvdE-.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/media/EIhgng8U4AAvdE-.jpg",
   //                    "url": "https://t.co/jFyeWyQI9T",
   //                    "display_url": "pic.twitter.com/jFyeWyQI9T",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1191308339755356160/photo/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "small": {
   //                          "w": 680,
   //                          "h": 428,
   //                          "resize": "fit"
   //                       },
   //                       "large": {
   //                          "w": 2048,
   //                          "h": 1288,
   //                          "resize": "fit"
   //                       },
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "medium": {
   //                          "w": 1200,
   //                          "h": 755,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {
   //                       "small": {
   //                          "faces": [
   //                             {
   //                                "x": 304,
   //                                "y": 90,
   //                                "h": 25,
   //                                "w": 25
   //                             },
   //                             {
   //                                "x": 249,
   //                                "y": 134,
   //                                "h": 25,
   //                                "w": 25
   //                             },
   //                             {
   //                                "x": 598,
   //                                "y": 250,
   //                                "h": 25,
   //                                "w": 25
   //                             },
   //                             {
   //                                "x": 420,
   //                                "y": 26,
   //                                "h": 69,
   //                                "w": 69
   //                             }
   //                          ]
   //                       },
   //                       "large": {
   //                          "faces": [
   //                             {
   //                                "x": 916,
   //                                "y": 272,
   //                                "h": 76,
   //                                "w": 76
   //                             },
   //                             {
   //                                "x": 750,
   //                                "y": 404,
   //                                "h": 78,
   //                                "w": 78
   //                             },
   //                             {
   //                                "x": 1802,
   //                                "y": 754,
   //                                "h": 76,
   //                                "w": 76
   //                             },
   //                             {
   //                                "x": 1266,
   //                                "y": 80,
   //                                "h": 210,
   //                                "w": 210
   //                             }
   //                          ]
   //                       },
   //                       "orig": {
   //                          "faces": [
   //                             {
   //                                "x": 916,
   //                                "y": 272,
   //                                "h": 76,
   //                                "w": 76
   //                             },
   //                             {
   //                                "x": 750,
   //                                "y": 404,
   //                                "h": 78,
   //                                "w": 78
   //                             },
   //                             {
   //                                "x": 1802,
   //                                "y": 754,
   //                                "h": 76,
   //                                "w": 76
   //                             },
   //                             {
   //                                "x": 1266,
   //                                "y": 80,
   //                                "h": 210,
   //                                "w": 210
   //                             }
   //                          ]
   //                       },
   //                       "medium": {
   //                          "faces": [
   //                             {
   //                                "x": 536,
   //                                "y": 159,
   //                                "h": 44,
   //                                "w": 44
   //                             },
   //                             {
   //                                "x": 439,
   //                                "y": 236,
   //                                "h": 45,
   //                                "w": 45
   //                             },
   //                             {
   //                                "x": 1055,
   //                                "y": 441,
   //                                "h": 44,
   //                                "w": 44
   //                             },
   //                             {
   //                                "x": 741,
   //                                "y": 46,
   //                                "h": 123,
   //                                "w": 123
   //                             }
   //                          ]
   //                       }
   //                    }
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 445,
   //           "favorite_count": 2804,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "ja"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 15:16:19 +0000 2019",
   //           "id": 1191011230175023000,
   //           "id_str": "1191011230175023110",
   //           "text": "Productive interaction with Myanmar’s State Counsellor, Daw Aung San Suu Kyi. We had in-depth deliberations on addi… https://t.co/Zh7oCxaDmS",
   //           "truncated": true,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [
   //                 {
   //                    "url": "https://t.co/Zh7oCxaDmS",
   //                    "expanded_url": "https://twitter.com/i/web/status/1191011230175023110",
   //                    "display_url": "twitter.com/i/web/status/1…",
   //                    "indices": [
   //                       117,
   //                       140
   //                    ]
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 2345,
   //           "favorite_count": 16031,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 15:15:30 +0000 2019",
   //           "id": 1191011023395754000,
   //           "id_str": "1191011023395753984",
   //           "text": "မြန်မာနိုင်ငံသည် ကျွန်ုပ်တို့ အရှေ့နှင့်ထိတွေ့ဆက်ဆံရေးမူဝါဒတွင် အဓိကကျသည်။ ပိုမိုခိုင်မာသောနှစ်နိုင်ငံဆက်ဆံရေးသည်… https://t.co/iSa9gihPK5",
   //           "truncated": true,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [
   //                 {
   //                    "url": "https://t.co/iSa9gihPK5",
   //                    "expanded_url": "https://twitter.com/i/web/status/1191011023395753984",
   //                    "display_url": "twitter.com/i/web/status/1…",
   //                    "indices": [
   //                       115,
   //                       138
   //                    ]
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 915,
   //           "favorite_count": 5797,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "my"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 15:15:11 +0000 2019",
   //           "id": 1191010943137771500,
   //           "id_str": "1191010943137771521",
   //           "text": "||မြန်မာနိုင်ငံ၏ နိုင်ငံတော်အတိုင်ပင်ခံ ဒေါ်အောင်ဆန်းစုကြည်နှင့်အကျိုးရှိသောဆွေးနွေးမှု|| အိန္ဒိယ-မြန်မာချစ်ကြည်ရင်… https://t.co/phDjTaevJ2",
   //           "truncated": true,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [
   //                 {
   //                    "url": "https://t.co/phDjTaevJ2",
   //                    "expanded_url": "https://twitter.com/i/web/status/1191010943137771521",
   //                    "display_url": "twitter.com/i/web/status/1…",
   //                    "indices": [
   //                       117,
   //                       140
   //                    ]
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 1237,
   //           "favorite_count": 8921,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "my"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 10:53:45 +0000 2019",
   //           "id": 1190945150106665000,
   //           "id_str": "1190945150106664960",
   //           "text": "Investors are taking a long term call on India. \n\nIndia’s growth trajectory is also reflected in several ratings. https://t.co/FUsGz49Ug2",
   //           "truncated": false,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [],
   //              "media": [
   //                 {
   //                    "id": 1190859589601751000,
   //                    "id_str": "1190859589601751040",
   //                    "indices": [
   //                       114,
   //                       137
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859589601751040/img/kgoKUnIJ121YhbaP.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859589601751040/img/kgoKUnIJ121YhbaP.jpg",
   //                    "url": "https://t.co/FUsGz49Ug2",
   //                    "display_url": "pic.twitter.com/FUsGz49Ug2",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190945150106664960/video/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {}
   //                 }
   //              ]
   //           },
   //           "extended_entities": {
   //              "media": [
   //                 {
   //                    "id": 1190859589601751000,
   //                    "id_str": "1190859589601751040",
   //                    "indices": [
   //                       114,
   //                       137
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859589601751040/img/kgoKUnIJ121YhbaP.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859589601751040/img/kgoKUnIJ121YhbaP.jpg",
   //                    "url": "https://t.co/FUsGz49Ug2",
   //                    "display_url": "pic.twitter.com/FUsGz49Ug2",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190945150106664960/video/1",
   //                    "type": "video",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "video_info": {
   //                       "aspect_ratio": [
   //                          16,
   //                          9
   //                       ],
   //                       "duration_millis": 260120,
   //                       "variants": [
   //                          {
   //                             "content_type": "application/x-mpegURL",
   //                             "url": "https://video.twimg.com/amplify_video/1190859589601751040/pl/0ahH-KM2LjBu4ZZ2.m3u8?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 288000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859589601751040/vid/480x270/WM6fE15-_89D2Pkx.mp4?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 832000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859589601751040/vid/640x360/nODIzr2eNRg4snua.mp4?tag=13"
   //                          }
   //                       ]
   //                    },
   //                    "features": {},
   //                    "additional_media_info": {
   //                       "title": "",
   //                       "description": "",
   //                       "embeddable": true,
   //                       "monetizable": false
   //                    }
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 2315,
   //           "favorite_count": 12543,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 10:52:07 +0000 2019",
   //           "id": 1190944740809691100,
   //           "id_str": "1190944740809691138",
   //           "text": "Money saved is money earned.\n\nEnergy conserved is energy generated. https://t.co/y2oBRHu9jj",
   //           "truncated": false,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [],
   //              "media": [
   //                 {
   //                    "id": 1190859281760784400,
   //                    "id_str": "1190859281760784384",
   //                    "indices": [
   //                       68,
   //                       91
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859281760784384/img/ukY0Hc1xeDOSqppz.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859281760784384/img/ukY0Hc1xeDOSqppz.jpg",
   //                    "url": "https://t.co/y2oBRHu9jj",
   //                    "display_url": "pic.twitter.com/y2oBRHu9jj",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944740809691138/video/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {}
   //                 }
   //              ]
   //           },
   //           "extended_entities": {
   //              "media": [
   //                 {
   //                    "id": 1190859281760784400,
   //                    "id_str": "1190859281760784384",
   //                    "indices": [
   //                       68,
   //                       91
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859281760784384/img/ukY0Hc1xeDOSqppz.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859281760784384/img/ukY0Hc1xeDOSqppz.jpg",
   //                    "url": "https://t.co/y2oBRHu9jj",
   //                    "display_url": "pic.twitter.com/y2oBRHu9jj",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944740809691138/video/1",
   //                    "type": "video",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "video_info": {
   //                       "aspect_ratio": [
   //                          16,
   //                          9
   //                       ],
   //                       "duration_millis": 151640,
   //                       "variants": [
   //                          {
   //                             "content_type": "application/x-mpegURL",
   //                             "url": "https://video.twimg.com/amplify_video/1190859281760784384/pl/BtZMb1rRa-kNMVSH.m3u8?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 288000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859281760784384/vid/480x270/WT2XZqPnyxeVVbE8.mp4?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 832000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859281760784384/vid/640x360/18MRhKcjhqvGkenw.mp4?tag=13"
   //                          }
   //                       ]
   //                    },
   //                    "features": {},
   //                    "additional_media_info": {
   //                       "title": "",
   //                       "description": "",
   //                       "embeddable": true,
   //                       "monetizable": false
   //                    }
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 3902,
   //           "favorite_count": 24610,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 10:51:24 +0000 2019",
   //           "id": 1190944561096323000,
   //           "id_str": "1190944561096323072",
   //           "text": "From ambitious missions to grassroots mass movements, public participation has made the impossible into possible. https://t.co/IBChs6juhN",
   //           "truncated": false,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [],
   //              "media": [
   //                 {
   //                    "id": 1190859150894321700,
   //                    "id_str": "1190859150894321664",
   //                    "indices": [
   //                       114,
   //                       137
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859150894321664/img/q180OQ-us-NFni2q.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859150894321664/img/q180OQ-us-NFni2q.jpg",
   //                    "url": "https://t.co/IBChs6juhN",
   //                    "display_url": "pic.twitter.com/IBChs6juhN",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944561096323072/video/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {}
   //                 }
   //              ]
   //           },
   //           "extended_entities": {
   //              "media": [
   //                 {
   //                    "id": 1190859150894321700,
   //                    "id_str": "1190859150894321664",
   //                    "indices": [
   //                       114,
   //                       137
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190859150894321664/img/q180OQ-us-NFni2q.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190859150894321664/img/q180OQ-us-NFni2q.jpg",
   //                    "url": "https://t.co/IBChs6juhN",
   //                    "display_url": "pic.twitter.com/IBChs6juhN",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944561096323072/video/1",
   //                    "type": "video",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "video_info": {
   //                       "aspect_ratio": [
   //                          16,
   //                          9
   //                       ],
   //                       "duration_millis": 95760,
   //                       "variants": [
   //                          {
   //                             "content_type": "application/x-mpegURL",
   //                             "url": "https://video.twimg.com/amplify_video/1190859150894321664/pl/0LiayO7oaAvqkNjj.m3u8?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 288000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859150894321664/vid/480x270/jHccw1E59jZ3lOG2.mp4?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 832000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190859150894321664/vid/640x360/jo9SaRcD7-_CRFBq.mp4?tag=13"
   //                          }
   //                       ]
   //                    },
   //                    "features": {},
   //                    "additional_media_info": {
   //                       "title": "",
   //                       "description": "",
   //                       "embeddable": true,
   //                       "monetizable": false
   //                    }
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 1555,
   //           "favorite_count": 7717,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        },
   //        {
   //           "created_at": "Sun Nov 03 10:50:30 +0000 2019",
   //           "id": 1190944333085597700,
   //           "id_str": "1190944333085597699",
   //           "text": "A brief overview of the positive changes in India over the last five years. https://t.co/Hf781yHvP0",
   //           "truncated": false,
   //           "entities": {
   //              "hashtags": [],
   //              "symbols": [],
   //              "user_mentions": [],
   //              "urls": [],
   //              "media": [
   //                 {
   //                    "id": 1190858987350048800,
   //                    "id_str": "1190858987350048769",
   //                    "indices": [
   //                       76,
   //                       99
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190858987350048769/img/vV1_8C5_m_RQ_xUz.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190858987350048769/img/vV1_8C5_m_RQ_xUz.jpg",
   //                    "url": "https://t.co/Hf781yHvP0",
   //                    "display_url": "pic.twitter.com/Hf781yHvP0",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944333085597699/video/1",
   //                    "type": "photo",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "features": {}
   //                 }
   //              ]
   //           },
   //           "extended_entities": {
   //              "media": [
   //                 {
   //                    "id": 1190858987350048800,
   //                    "id_str": "1190858987350048769",
   //                    "indices": [
   //                       76,
   //                       99
   //                    ],
   //                    "media_url": "http://pbs.twimg.com/amplify_video_thumb/1190858987350048769/img/vV1_8C5_m_RQ_xUz.jpg",
   //                    "media_url_https": "https://pbs.twimg.com/amplify_video_thumb/1190858987350048769/img/vV1_8C5_m_RQ_xUz.jpg",
   //                    "url": "https://t.co/Hf781yHvP0",
   //                    "display_url": "pic.twitter.com/Hf781yHvP0",
   //                    "expanded_url": "https://twitter.com/narendramodi/status/1190944333085597699/video/1",
   //                    "type": "video",
   //                    "sizes": {
   //                       "thumb": {
   //                          "w": 150,
   //                          "h": 150,
   //                          "resize": "crop"
   //                       },
   //                       "large": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "medium": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       },
   //                       "small": {
   //                          "w": 640,
   //                          "h": 360,
   //                          "resize": "fit"
   //                       }
   //                    },
   //                    "video_info": {
   //                       "aspect_ratio": [
   //                          16,
   //                          9
   //                       ],
   //                       "duration_millis": 107480,
   //                       "variants": [
   //                          {
   //                             "content_type": "application/x-mpegURL",
   //                             "url": "https://video.twimg.com/amplify_video/1190858987350048769/pl/xEl3vIFGg_eJsNM1.m3u8?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 832000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190858987350048769/vid/640x360/WKutj5DL3Yq3snuU.mp4?tag=13"
   //                          },
   //                          {
   //                             "bitrate": 288000,
   //                             "content_type": "video/mp4",
   //                             "url": "https://video.twimg.com/amplify_video/1190858987350048769/vid/480x270/ASbpvyT3-rDbHup3.mp4?tag=13"
   //                          }
   //                       ]
   //                    },
   //                    "features": {},
   //                    "additional_media_info": {
   //                       "title": "",
   //                       "description": "",
   //                       "embeddable": true,
   //                       "monetizable": false
   //                    }
   //                 }
   //              ]
   //           },
   //           "source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
   //           "in_reply_to_status_id": null,
   //           "in_reply_to_status_id_str": null,
   //           "in_reply_to_user_id": null,
   //           "in_reply_to_user_id_str": null,
   //           "in_reply_to_screen_name": null,
   //           "user": {
   //              "id": 18839785,
   //              "id_str": "18839785",
   //              "name": "Narendra Modi",
   //              "screen_name": "narendramodi",
   //              "location": "India",
   //              "description": "Prime Minister of India",
   //              "url": "https://t.co/zzYhUUfq6i",
   //              "entities": {
   //                 "url": {
   //                    "urls": [
   //                       {
   //                          "url": "https://t.co/zzYhUUfq6i",
   //                          "expanded_url": "http://www.narendramodi.in",
   //                          "display_url": "narendramodi.in",
   //                          "indices": [
   //                             0,
   //                             23
   //                          ]
   //                       }
   //                    ]
   //                 },
   //                 "description": {
   //                    "urls": []
   //                 }
   //              },
   //              "protected": false,
   //              "followers_count": 51104598,
   //              "friends_count": 2299,
   //              "listed_count": 24656,
   //              "created_at": "Sat Jan 10 17:18:56 +0000 2009",
   //              "favourites_count": 0,
   //              "utc_offset": null,
   //              "time_zone": null,
   //              "geo_enabled": false,
   //              "verified": true,
   //              "statuses_count": 25206,
   //              "lang": null,
   //              "contributors_enabled": false,
   //              "is_translator": false,
   //              "is_translation_enabled": false,
   //              "profile_background_color": "F4EDD4",
   //              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
   //              "profile_background_tile": false,
   //              "profile_image_url": "http://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_normal.png",
   //              "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1559221352",
   //              "profile_link_color": "4E7096",
   //              "profile_sidebar_border_color": "FFFFFF",
   //              "profile_sidebar_fill_color": "D5DFED",
   //              "profile_text_color": "233863",
   //              "profile_use_background_image": true,
   //              "has_extended_profile": true,
   //              "default_profile": false,
   //              "default_profile_image": false,
   //              "can_media_tag": true,
   //              "followed_by": false,
   //              "following": true,
   //              "follow_request_sent": false,
   //              "notifications": false,
   //              "translator_type": "regular"
   //           },
   //           "geo": null,
   //           "coordinates": null,
   //           "place": null,
   //           "contributors": null,
   //           "is_quote_status": false,
   //           "retweet_count": 2105,
   //           "favorite_count": 11833,
   //           "favorited": false,
   //           "retweeted": false,
   //           "possibly_sensitive": false,
   //           "lang": "en"
   //        }
   // ];


          $('#loader_area').addClass('d-none');
          $('#result_area').removeClass('d-none');
          setTimeout (() => {
            $('#recipeCarouselInsta .carousel-item').each(function(){
                var next = $(this).next();
                if (!next.length) {
                next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));

                for (var i=0;i<4;i++) {
                    next=next.next();
                    if (!next.length) {
                      next = $(this).siblings(':first');
                    }

                    next.children(':first-child').clone().appendTo($(this));
                  }
            });
            $('#recipeCarouselTwitter .carousel-item').each(function(){
                var next = $(this).next();
                if (!next.length) {
                next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));

                for (var i=0;i<1;i++) {
                    next=next.next();
                    if (!next.length) {
                      next = $(this).siblings(':first');
                    }

                    next.children(':first-child').clone().appendTo($(this));
                }
            });
          }, 100);

        }
      )


  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
