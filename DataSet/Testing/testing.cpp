#include <jsoncpp/json/json.h>
#include <fstream>
#include <iostream>
#include<bits/stdc++.h>
using namespace std;


struct persons
{
    string name;
    string city;
};

int main()
{
    vector<persons> a;
    auto people= a;
    std::ifstream people_file("output.json", std::ifstream::binary);
    people_file >> people;
    cout << people; //This will print the entire json object.
    //The following lines will let you access the indexed objects.
    cout << people["persons"];            //Prints the value for "Anna"
    cout << people["persons"][0]["city"]; //Prints the value for "Ben"
    cout << people["persons"][1]["name"]; //Prints the value corresponding to "profession" in the json for "Anna"
}
