import TorrentList from 'structures/TorrentList';

export default class Episode {
    constructor(data) {
        this.title = data.title;
        this.episode = data.episode;
        this.season = data.season;
        this.tvdb_id = data.tvdb_id;
        this.overview = data.overview;
        this.first_aired = data.first_aired;
        this.date_based = data.date_based;
        this.torrents = new TorrentList(data.torrents);
    }
}