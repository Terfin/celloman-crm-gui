import kivy
from kivy.uix.label import Label
from kivy.uix.popup import Popup
from kivy.uix.stacklayout import StackLayout

kivy.require('1.9.0')
from kivy.config import Config
Config.set('graphics', 'width', '400')
Config.set('graphics', 'height', '200')
Config.set('graphics', 'resizable', False)

from kivy.app import App, Widget
import bl


class CrmLogin(StackLayout):
    f_usernane = None
    f_password = None

    def clear_inputs(self, *args):
        for v in self.ids.values():
            v.text = ''

    def login(self, username, password):
        user = None
        if not bl.try_login_user(username.text, password.text, user):
            popup = Popup(content=Label(text='Please check your credentials and try again'), title="Login Failed", size_hint=(0.8, 0.7))
            popup.bind(on_dismiss=self.clear_inputs)
            popup.open()
        else:
            print(user)




class CrmApp(App):


    def build(self):
        page = CrmLogin()
        return page


if __name__ == '__main__':
    CrmApp().run()