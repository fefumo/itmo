% 2025-09-09 19:05

% FACTS

game(disco_elysium).
game(rimworld).
game(witcher3).
game(cyberpunk2077).
game(portal2).
game(dota2).
game(cs2).
game(silksong).
game(hollow_knight).
game(elden_ring).
game(dark_souls3).
game(fortnite).
game(league_of_legends).
game(pubg).
game(minecraft).
game(overwatch).
game(wow).  % World of Warcraft
game(hotline_miami).
game(satisfactory).
game(factorio).
game(hades).

genre(rpg).
genre(moba).
genre(soulslike).
genre(shooter).
genre(platformer).
genre(puzzle).
genre(simulation).
genre(survival).
genre(adventure).
genre(roguelike).
genre(mmorpg).
genre(action).
genre(soulslike).
genre(platformer).

mechanic(crafting).
mechanic(stealth).
mechanic(coop).
mechanic(pvp).
mechanic(loot).
mechanic(building).
mechanic(farming).

developer(cdpr).
developer(valve).
developer(team_cherry).
developer(fromsoftware).
developer(epic_games).
developer(riot_games).
developer(pubg_studios).
developer(mojang_studios).
developer(blizzard_entertainment).


developed_by(witcher3, cdpr).
developed_by(cyberpunk2077, cdpr).
developed_by(portal2, valve).
developed_by(dota2, valve).
developed_by(cs2, valve).
developed_by(silksong, team_cherry).
developed_by(hollow_knight, team_cherry).
developed_by(elden_ring, fromsoftware).
developed_by(dark_souls3, fromsoftware).
developed_by(fortnite, epic_games).
developed_by(league_of_legends, riot_games).
developed_by(pubg, pubg_studios).
developed_by(minecraft, mojang_studios).
developed_by(overwatch, blizzard_entertainment).
developed_by(wow, blizzard_entertainment).
developed_by(hotline_miami, dennaton_games).
developed_by(satisfactory, coffee_stain).
developed_by(factorio, wube_software).
developed_by(hades, supergiant).
developed_by(disco_elysium, zaum).   % ZA/UM
developed_by(rimworld, ludeon_studios).  % Ludeon Studios

indie_studio(zaum).
indie_studio(ludeon_studios).
indie_studio(wube_software).
indie_studio(dennaton_games).
indie_studio(team_cherry).
indie_studio(mojang_studios).   % well they used to be indie...
indie_studio(wube).
indie_studio(coffee_stain).

has_genre(witcher3, rpg).
has_genre(witcher3, action).
has_genre(cyberpunk2077, rpg).
has_genre(cyberpunk2077, action).
has_genre(portal2, puzzle).
has_genre(dota2, moba).
has_genre(cs2, shooter).
has_genre(silksong, platformer).
has_genre(hollow_knight, platformer).
has_genre(elden_ring, rpg).
has_genre(elden_ring, action).
has_genre(dark_souls3, rpg).
has_genre(dark_souls3, action).
has_genre(dark_souls3, soulslike).
has_genre(fortnite, shooter).
has_genre(league_of_legends, moba).
has_genre(pubg, shooter).
has_genre(minecraft, survival).
has_genre(minecraft, adventure).
has_genre(overwatch, shooter).
has_genre(wow, mmorpg).
has_genre(hotline_miami, action).
has_genre(hotline_miami, shooter).
has_genre(satisfactory, simulation).
has_genre(factorio, simulation).
has_genre(rimworld, simulation).
has_genre(hades, roguelike).
has_genre(disco_elysium, rpg).

features_mechanic(minecraft, crafting).
features_mechanic(minecraft, building).
features_mechanic(minecraft, farming).
features_mechanic(minecraft, loot).
features_mechanic(minecraft, pvp).

features_mechanic(dota2, farming).
features_mechanic(dota2, pvp).

features_mechanic(portal2, coop).

features_mechanic(fortnite, pvp).
features_mechanic(fortnite, building).

features_mechanic(league_of_legends, pvp).
features_mechanic(league_of_legends, farming).

features_mechanic(cs2, pvp).
features_mechanic(overwatch, pvp).

features_mechanic(pubg, pvp).
features_mechanic(pubg, loot).

features_mechanic(hades, loot).
features_mechanic(hades, permadeath).

features_mechanic(satisfactory, crafting).
features_mechanic(satisfactory, building).
features_mechanic(factorio, crafting).
features_mechanic(factorio, building).
features_mechanic(rimworld, farming).
features_mechanic(rimworld, crafting).
features_mechanic(rimworld, building).

% RULES

indie_game(Game) :-
    developed_by(Game, Studio),
    ( Studio = indie ; indie_studio(Studio) ).

hardcore(Game) :-
    has_genre(Game, soulslike);
    features_mechanic(Game, permadeath).

action_rpg(Game) :-
    has_genre(Game, rpg),
    has_genre(Game, action).

studio_specializes(Studio, Genre) :-
    developed_by(Game, Studio),
    has_genre(Game, Genre).

casual_game(Game) :-
    ( has_genre(Game, adventure);
        has_genre(Game, puzzle);
        has_genre(Game, platformer)
    ),
    \+ features_mechanic(Game, pvp),
    \+ features_mechanic(Game, permadeath).

studio_specializes_in_mechanic(Studio, Mech) :-
    developed_by(Game, Studio),
    features_mechanic(Game, Mech).
