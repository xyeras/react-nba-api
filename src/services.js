
  const TypeLogos = {
    Hawks:'https://content.sportslogos.net/logos/6/220/full/9099_atlanta_hawks-alternate-2021.png',
    Celtics:'https://content.sportslogos.net/logos/6/213/full/9648_boston_celtics-alternate-2015.png',
    Nets:'https://content.sportslogos.net/logos/6/3786/full/930_brooklyn-nets-partial-2013.png',
    Hornets:'https://content.sportslogos.net/logos/6/5120/full/1604_charlotte_hornets-primary_on_dark-2015.png',
    Bulls:'https://content.sportslogos.net/logos/6/221/full/6355_chicago_bulls-primary_on_dark-1967.png',
    Cavaliers:'https://content.sportslogos.net/logos/6/222/full/5681_cleveland_cavaliers-primary_on_dark-2011.png',
    Mavericks:'https://content.sportslogos.net/logos/6/228/full/7437_dallas_mavericks-jersey-2012.png',
    Nuggets:'https://content.sportslogos.net/logos/6/229/full/8155_denver_nuggets-primary_on_dark-2019.png',
    Pistons:'https://content.sportslogos.net/logos/6/223/full/8058_detroit_pistons-primary_on_dark-2018.png',
    Warriors:'https://content.sportslogos.net/logos/6/235/full/4449_golden_state_warriors-primary_dark-2020.png',
    Rockets:'https://content.sportslogos.net/logos/6/230/full/8039_houston_rockets-primary_dark-2020.png',
    Pacers:'https://content.sportslogos.net/logos/6/224/full/1059_indiana_pacers-primary_on_dark-2018.png',
    Clippers:'https://content.sportslogos.net/logos/6/236/full/5385_los_angeles_clippers-primary_dark-2016.png',
    Lakers:'https://content.sportslogos.net/logos/6/237/full/1772_los_angeles_lakers-primary_on_dark-2002.png',
    Grizzlies:'https://content.sportslogos.net/logos/6/231/full/9500_memphis_grizzlies-primary_on_dark-2019.png',
    Heat:'https://content.sportslogos.net/logos/6/214/full/u6bxz6n2tlrjgwnyewlke2i54.png',
    Bucks:'https://content.sportslogos.net/logos/6/225/full/1ipwspgwqrhy9khsec0df1fqt.png',
    Timberwolves:'https://content.sportslogos.net/logos/6/232/full/7256_minnesota_timberwolves-primary_on_dark-2018.png',
    Pelicans:'https://content.sportslogos.net/logos/6/4962/full/2890_new_orleans_pelicans-primary_on_dark-2014.png',
    Knicks:' https://content.sportslogos.net/logos/6/216/full/5fqp4o1lo5l7rx23i6g1i7hhb.gif',
    Thunder:'https://content.sportslogos.net/logos/6/2687/full/yxeygwfq4afv3chydpfay6imj.png',
    Magic:'https://content.sportslogos.net/logos/6/217/full/vy57q2i5o1bhia4krdz2ysd9o.gif',
    Seventysixters:'https://content.sportslogos.net/logos/6/218/full/6169_philadelphia_76ers-primary_dark-1978.png',
    Suns:'https://content.sportslogos.net/logos/6/238/full/hsfhrcipet4824xusge04tghr.gif',
    TrailBlazers:' https://content.sportslogos.net/logos/6/239/full/8395_portland_trail_blazers-primary_on_dark-2018.png',
    Kings:'https://content.sportslogos.net/logos/6/240/full/8579_sacramento_kings-primary_on_dark-2017.png',
    Spurs:'https://content.sportslogos.net/logos/6/233/full/8724_san_antonio_spurs-primary_on_dark-2018.png',
    Raptors:'https://content.sportslogos.net/logos/6/227/full/toronto_raptors_logo__1173.png',
    Jazz:'https://content.sportslogos.net/logos/6/234/full/7907_utah_jazz-primary_on_dark-2017.png',
    Wizards:' https://content.sportslogos.net/logos/6/219/full/7525_washington_wizards-primary_on_dark-2015.png',


 
  };
  Object.freeze(TypeLogos)

  export const SetLogoType = (type)=> {
    switch (type) {
      case "Hawks":
        return TypeLogos.Hawks;
      case "Celtics":
        return TypeLogos.Celtics;
      case "Nets":
        return TypeLogos.Nets;
      case "Hornets":
        return TypeLogos.Hornets;
        case "Bulls":
        return TypeLogos.Bulls;
        case "Cavaliers":
        return TypeLogos.Cavaliers;
        case "Mavericks":
        return TypeLogos.Mavericks;
        case "Nuggets":
        return TypeLogos.Nuggets;
        case "Pistons":
        return TypeLogos.Pistons;
        case "Warriors":
        return TypeLogos.Warriors;
        case "Rockets":
        return TypeLogos.Rockets;
        case "Pacers":
        return TypeLogos.Pacers;
        case "Clippers":
        return TypeLogos.Clippers;
        case "Lakers":
        return TypeLogos.Lakers;
        case "Grizzlies":
        return TypeLogos.Grizzlies;
        case "Heat":
            return TypeLogos.Heat;
        case "Bucks":
            return TypeLogos.Bucks;
        case "Timberwolves":
        return TypeLogos.Timberwolves;
        case "Pelicans":
            return TypeLogos.Pelicans;
        case "Knicks":
        return TypeLogos.Knicks;
        case "Thunder":
        return TypeLogos.Thunder;
        case "Magic":
        return TypeLogos.Magic;
        case "76ers":
        return TypeLogos.Seventysixters;
        case "Suns":
        return TypeLogos.Suns;
        case "Trail Blazers":
        return TypeLogos.TrailBlazers;
        case "Kings":
        return TypeLogos.Kings;
        case "Spurs":
        return TypeLogos.Spurs;
        case "Raptors":
        return TypeLogos.Raptors;
        case "Jazz":
        return TypeLogos.Jazz;
        case "Wizards":
        return TypeLogos.Wizards;

      default:
        return '#333';
    }
  };

  