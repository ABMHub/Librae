import styles from './modal.styles';
import {Modal, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from "react";
import { GetIcon } from '../../Resources/icons';
import { GetGif } from '../../Resources/getGif';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {GradientButton} from "../Buttons/buttons"

export function ModalCorrect (props) {
    const {toggleModalVisibility, isModalVisible, gif_name, answer="Bom dia"} = props;
    const result = "good_news"
    return (
        <>
        <Modal animationType="slide" 
        transparent visible={isModalVisible} 
        presentationStyle="overFullScreen" 
        onDismiss={toggleModalVisibility}>

            <View style={styles.viewWrapper}>
            
                <View style={styles.modalView}>   

                    <View style={styles.correctTitleStyle}>    
                        <Text style={styles.resultTextStyle}>Você acertou!</Text> 
                        <View style={styles.resultStyle}>
                            <GetIcon icon_name={result}/>
                        </View>  
                    </View>
                    
                    <View style={styles.textStyle}>    
                        <Text style={styles.textStyle}> {answer} </Text>
                    </View>

                    <View style={{...styles.correct_img_button_div, marginBottom: 40}}>
                        <View style={styles.img_button}>
                            <GetGif icon_name={gif_name} style={{width: '100%', height: '100%', borderRadius: 20}}/>
                        </View>
                    </View>
                    
                    <GradientButton text={"Continuar"} onPress={toggleModalVisibility}/> 
                </View>
            </View>
            
        </Modal>
        </>
    )
}

export function TextModalCorrect (props) {
    const {toggleModalVisibility, isModalVisible, gif_name, answer="Bom dia"} = props;
    const result = "good_news"
    return (
        <>
        <Modal animationType="slide" 
        transparent visible={isModalVisible} 
        presentationStyle="overFullScreen" 
        onDismiss={toggleModalVisibility}>

            <View style={styles.viewWrapper}>
            
                <View style={styles.textModalView}>   

                    <View style={styles.correctTitleStyle}>    
                        <Text style={styles.resultTextStyle}>Você acertou!</Text> 
                        <View style={styles.resultStyle}>
                            <GetIcon icon_name={result}/>
                        </View>  
                    </View>

                    <View style={{marginBottom: 30}}>
                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20,} }>    
                            <Text style={{...styles.textStyle, fontSize:30, marginTop:20, fontWeight:'bold'}}> Resposta correta </Text>
                        </View>

                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20,} }>    
                            <Text style={{...styles.textStyle, fontSize:26, marginTop:5, marginBottom:10, fontWeight:'bold'}}> {answer}</Text>
                        </View>
                    </View>

                    <GradientButton text={"Continuar"} onPress={toggleModalVisibility} style={{height:'25%'}}/>    
                </View>    
            </View>      
        </Modal>
        </>
    )
}

export function TextModalIncorrect (props) {
    const {toggleModalVisibility, isModalVisible, gif_name, answer="Bom dia"} = props;
    const result = "bad_news"
    return (
        <>
        <Modal animationType="slide" 
        transparent visible={isModalVisible} 
        presentationStyle="overFullScreen" 
        onDismiss={toggleModalVisibility}>

            <View style={styles.viewWrapper}>
            
                <View style={styles.incorrectTextModalView}>   

                    <View style={styles.titleStyle}>    
                        <Text style={{...styles.resultTextStyle, color:'#FF3B5E'}}>Que pena! Você errou :(</Text> 
                        <View style={styles.resultStyle}>
                            <GetIcon icon_name={result}/>
                        </View>  
                    </View>
                    
                    <View>
                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20, marginTop: 10}}>    
                            <Text style={{...styles.textStyle, color:'#FF3B5E', fontSize:30, marginTop:10, fontWeight:'bold'}}> Sua resposta </Text>
                        </View>

                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20,} }>    
                            <Text style={{...styles.textStyle, color:'#FF3B5E', fontSize:26, marginTop:5, marginBottom:10, fontWeight:'bold'}}> {answer} </Text>
                        </View>
                    </View>

                    <View style={{marginBottom: 30}}>
                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20,} }>    
                            <Text style={{...styles.textStyle, fontSize:30, marginTop:40, fontWeight:'bold'}}> Resposta correta </Text>
                        </View>

                        <View style={{...styles.textStyle, alignSelf:'flex-start', marginLeft:20,} }>    
                            <Text style={{...styles.textStyle, fontSize:26, marginTop:5, marginBottom:10, fontWeight:'bold'}}> {answer}</Text>
                        </View>
                    </View>

                    <GradientButton text={"Continuar"} onPress={toggleModalVisibility} style={{height:'16%'}}/>      
                </View>    
            </View>
        </Modal>
        </>
    )
}


export function ModalIncorrect (props) {
    const {toggleModalVisibility, isModalVisible, gif_name, answer="Bom dia"} = props;
    const result = "bad_news"
    return (
        <>
        <Modal animationType="slide" 
        transparent visible={isModalVisible} 
        presentationStyle="overFullScreen" 
        onDismiss={toggleModalVisibility}>

            <View style={styles.viewWrapper}>
            
                <View style={styles.incorrectModalView}>   

                    <View style={styles.titleStyle}>    
                        <Text style={{...styles.resultTextStyle, color:'#FF3B5E'}}>Que pena! Você errou :(</Text> 
                        <View style={styles.resultStyle}>
                            <GetIcon icon_name={result}/>
                        </View>  
                    </View>
                    
                    <View style={styles.textStyle}>    
                        <Text style={{...styles.textStyle, color:'#FF3B5E', fontSize:20, marginTop:10, marginBottom:10}}> Sua resposta </Text>
                    </View>

                    <View>
                        <View style={styles.incorrect_img_button_div}>
                            <View style={{...styles.incorrect_img_button, backgroundColor: '#EF0A0A'}}>
                                <GetGif icon_name={gif_name} style={{width: '100%', height: '100%', borderRadius:20}}/>
                            </View> 
                            
                            <View style={{justifyContent: 'space-around'}}>
                                <Text style={{...styles.incorrectTextStyle, paddingRight: 47}}> {answer} </Text>
                            </View>
                        </View>

                        <View style={styles.textStyle}>    
                            <Text style={{...styles.textStyle, fontSize:20, marginTop:10, marginBottom:10}}> Resposta correta </Text>
                        </View>

                        <View style={{...styles.incorrect_img_button_div, marginBottom: 30}}>
                            <View style={{justifyContent: 'space-around'}}>
                                <Text style={{...styles.textStyle, paddingLeft: 47, fontSize: 20}}> {answer} </Text>
                            </View>
                            
                            <View style={{...styles.incorrect_img_button, backgroundColor: '#2EE011'}}>
                                <GetGif icon_name={gif_name} style={{width: '100%', height: '100%', borderRadius:20}}/>
                            </View> 
                        </View>
                    </View>
                    <GradientButton text={"Continuar"} onPress={toggleModalVisibility}/>      
                </View>    
            </View>
        </Modal>
        </>
    )
}