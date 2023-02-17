export default class DogsService {
  static async getAll(limit = 10, page = 0) {
    return await fetch(
      `https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`
    );
  }

  static async getById(id) {
    return await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
  }

  static async getImage(id) {
    return await fetch(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${id}`
    );
  }
}
