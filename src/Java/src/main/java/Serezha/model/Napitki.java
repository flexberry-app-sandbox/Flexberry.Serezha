package Serezha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Serezha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Напитки
 */
@Entity(name = "IISSerezhaНапитки")
@Table(schema = "public", name = "Напитки")
public class Napitki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодНапитка")
    private Integer коднапитка;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Стоимость")
    private Double стоимость;

    @OneToMany(mappedBy = "napitki", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavNapitkov> sostavnapitkovs;


    public Napitki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодНапитка() {
      return коднапитка;
    }

    public void setКодНапитка(Integer коднапитка) {
      this.коднапитка = коднапитка;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}