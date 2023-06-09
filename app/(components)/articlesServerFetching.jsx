// 'use server';
import supabase from "@/utils/supabase";
import Articles from "./Articles";

export const revalidate = 10;

export async function snagPosts() {
    const { data, error } = await supabase.from("post").select("*");
    // .eq("post_id", 1);

    !error ? console.log(data) : console.log(error);

    return data.map((art) => <Articles key serverArticles={art} />);

    // textField.innerText = data[0].text;
  }