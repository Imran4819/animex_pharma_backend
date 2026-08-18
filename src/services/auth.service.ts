import ClientModel from "../models/client.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  async signup(data: any) {
    const { name, email, phone, address, city } = data;

    if (!name) {
      throw new Error("Name is required");
    }

    const client = await ClientModel.create({
      name,
      email: email ?? null,
      phone: phone ?? null,
      address: address ?? null,
      city: city ?? null,
      status: "active"
    });

    const token = jwt.sign(
      {
        id: client.id,
        name: client.name,
        email: client.email
      },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    return {
      message: "Client registered successfully",
      token,
      client
    };
  }

  async login(data: any) {
    const { email, phone } = data;

    const whereCondition: any = {};
    if (email) whereCondition.email = email;
    if (phone) whereCondition.phone = phone;

    const client = await ClientModel.findOne({ where: whereCondition });

    if (!client) {
      throw new Error("Client not found");
    }

    const token = jwt.sign(
      {
        id: client.id,
        name: client.name,
        email: client.email
      },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    return {
      message: "Login successful",
      token,
      client
    };
  }
}
